import styled from 'styled-components'
import { Flex, Heading, Text, Link, useMatchBreakpointsContext } from '@nswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'
import ColoredWordLastHeading from './ColoredWordLastHeading'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -35%;
  margin-bottom:18%;
  padding:0px !important;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'NSWAP flying on the bottom' },
    { src: '1-left', alt: 'NSWAP flying on the left' },
    { src: '1-top', alt: 'NSWAP flying on the top' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'NSWAP flying on the bottom' },
    { src: '2-top', alt: 'NSWAP flying on the top' },
    { src: '2-right', alt: 'NSWAP flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { isTablet, isDesktop } = useMatchBreakpointsContext()

  return (
    <>

      {/* <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper> */}
      {/* {(isTablet || isDesktop) && (
        <FloatingPancakesWrapper>
          <TopLeftImgWrapper>
            <CompositeImage {...topLeftImage} maxHeight="256px" />
          </TopLeftImgWrapper>
          <BottomRightImgWrapper>
            <CompositeImage {...bottomRightImage} maxHeight="256px" />
          </BottomRightImgWrapper>
        </FloatingPancakesWrapper>
      )} */}
      <Wrapper>
        <Flex>
          <svg width="434" height="70" viewBox="0 0 434 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.908 44.8V59.828L0.564 66.492V36.096L7.908 44.8ZM23.072 43.032L33.544 54.048L32.796 63.84C26.3133 57.04 23.004 53.572 22.868 53.436C22.7773 53.3 22.6413 53.164 22.46 53.028C22.2787 52.892 22.1427 52.756 22.052 52.62L11.784 41.876L23.072 43.032ZM0.564 36.096L7.908 43.168V59.828L0.564 66.492V36.096ZM8.384 38.544C6.79733 37.2293 5.21067 35.9827 3.624 34.804L8.384 31.2H27.016L31.776 34.804L27.016 38.544H8.384ZM2.536 0.395998H32.864L26.268 7.74H9.472L2.536 0.395998ZM0.360001 33.716V3.32L7.704 9.916V26.78L0.360001 33.716ZM35.04 3.32V33.716L27.696 27.12V10.324L35.04 3.32ZM11.784 41.876H21.984C23.48 43.4627 25.6107 45.7293 28.376 48.676C31.1867 51.5773 32.9093 53.368 33.544 54.048L32.796 63.84C26.3133 57.04 23.004 53.572 22.868 53.436C22.7773 53.3 22.6413 53.164 22.46 53.028C22.2787 52.892 22.1427 52.756 22.052 52.62L11.784 41.876ZM57.9427 69.484L64.9467 62.14H81.7427L88.4067 69.484H57.9427ZM55.9707 36.096L63.2467 43.168V59.828L55.9707 66.492V36.096ZM63.7907 38.544C62.1134 37.2293 60.5267 35.9827 59.0307 34.804L63.7907 31.2H82.3547L87.1147 34.804L82.3547 38.544H63.7907ZM57.8747 0.395998H88.2027L81.6067 7.74H64.8107L57.8747 0.395998ZM55.7667 33.716V3.32L63.0427 9.916V26.78L55.7667 33.716ZM109.269 36.096L116.613 43.168V59.828L109.269 66.492V36.096ZM143.881 66.492L136.537 59.488V42.76L143.881 36.096V66.492ZM117.157 38.544C115.571 37.2747 113.961 36.028 112.329 34.804L117.157 31.2H135.721L140.481 34.804L135.721 38.544H117.157ZM111.241 0.395998H141.637L134.905 7.74H118.245L111.241 0.395998ZM109.065 33.716V3.32L116.409 9.916V26.78L109.065 33.716ZM143.677 3.32V33.716L136.333 27.12V10.324L143.677 3.32ZM165.696 69.484L172.7 62.14H189.496L196.092 69.484H165.696ZM163.656 36.096L171 43.168V59.828L163.656 66.492V36.096ZM198.268 66.492L190.924 59.488V42.76L198.268 36.096V66.492ZM165.628 0.395998H196.024L189.292 7.74H172.632L165.628 0.395998ZM163.452 33.716V3.32L170.796 9.916V26.78L163.452 33.716ZM198.064 3.32V33.716L190.72 27.12V10.324L198.064 3.32ZM250.343 14.54L220.151 64.18V51.6L233.615 29.5L236.743 32.832V24.4L250.343 2.096V14.54ZM233.615 29.5L236.743 24.4V20.32L220.151 2.096V15.152L233.615 29.5ZM291.524 36.096L298.8 43.168V59.828L291.524 66.492V36.096ZM299.412 38.544C297.735 37.2293 296.148 35.9827 294.652 34.804L299.412 31.2H317.976L322.736 34.804L317.976 38.544H299.412ZM293.428 0.395998H323.824L317.228 7.74H300.432L293.428 0.395998ZM291.456 33.716V3.32L298.732 9.916V26.78L291.456 33.716ZM346.863 69.484L353.867 62.14H370.663L377.259 69.484H346.863ZM344.823 36.096L352.167 43.168V59.828L344.823 66.492V36.096ZM379.435 66.492L372.091 59.488V42.76L379.435 36.096V66.492ZM346.795 0.395998H377.191L370.459 7.74H353.799L346.795 0.395998ZM344.619 33.716V3.32L351.963 9.916V26.78L344.619 33.716ZM379.231 3.32V33.716L371.887 27.12V10.324L379.231 3.32ZM406.622 44.8V59.828L399.278 66.492V36.096L406.622 44.8ZM421.786 43.032L432.258 54.048L431.51 63.84C425.027 57.04 421.718 53.572 421.582 53.436C421.491 53.3 421.355 53.164 421.174 53.028C420.992 52.892 420.856 52.756 420.766 52.62L410.498 41.876L421.786 43.032ZM399.278 36.096L406.622 43.168V59.828L399.278 66.492V36.096ZM407.098 38.544C405.511 37.2293 403.924 35.9827 402.338 34.804L407.098 31.2H425.73L430.49 34.804L425.73 38.544H407.098ZM401.25 0.395998H431.578L424.982 7.74H408.186L401.25 0.395998ZM399.074 33.716V3.32L406.418 9.916V26.78L399.074 33.716ZM433.754 3.32V33.716L426.41 27.12V10.324L433.754 3.32ZM410.498 41.876H420.698C422.194 43.4627 424.324 45.7293 427.09 48.676C429.9 51.5773 431.623 53.368 432.258 54.048L431.51 63.84C425.027 57.04 421.718 53.572 421.582 53.436C421.491 53.3 421.355 53.164 421.174 53.028C420.992 52.892 420.856 52.756 420.766 52.62L410.498 41.876Z"
              fill="#00EF6E"
            ></path>
          </svg>
          &nbsp; &nbsp; &nbsp; &nbsp; <ColoredWordLastHeading color="#ffffff" text={t('NORDEK?')} />
        </Flex>

        <Text textAlign="center" color="#ffffff">
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text textAlign="center" color="#ffffff">
          {t('No registration needed.')}
        </Text>

        {/* <Link external href="https://docs.nordekscan.com/">
          {t('Connect Wallet')}
        </Link> */}
        {!account && <ConnectWalletButton mt="24px" />}
      </Wrapper>
    </>
  )
}

export default Footer
