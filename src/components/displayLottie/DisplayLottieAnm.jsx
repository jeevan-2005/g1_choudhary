import Lottie from 'lottie-react'

const DisplayLottieAnm = ({animationData}) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <div>
      <Lottie animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
          style={{ width: '100%', height: '20%' }} />
    </div>
  )
}

export default DisplayLottieAnm
