import axios from "axios";

export const LOADING_GITHUB_STATS = "githubStats/loading";
export const FETCH_GITHUB_STATS = "githubStats/fetch";
export const ERROR_GITHUB_STATS = "githubStats/error";

export const loadingType = () => ({ type: LOADING_GITHUB_STATS });

export const fetchGithubStats = () => async (dispatch) => {
  dispatch(loadingType());
  try {
    const query = `
      query {
        user(login: "${import.meta.env.VITE_GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    console.log(response);

    const pinnedRepos = response.data.data.user.pinnedItems.edges.map(
      (edge) => edge.node
    );

    // console.log(pinnedRepos, contributions);

    dispatch({
      type: FETCH_GITHUB_STATS,
      payload: pinnedRepos,
    });
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    dispatch({ type: ERROR_GITHUB_STATS, payload: error.message });
  }
};
