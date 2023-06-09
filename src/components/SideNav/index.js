import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc, RefreshCw } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import { RowFixed } from '../Row'
import Logo from './openexamainlogo.png'

const Wrapper = styled.div`
  // height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  // background-color: ${({ theme }) => transparentize(0.4, theme.bg1)};
  background-color: #202232;
  // color: ${({ theme }) => theme.text1};
  // padding: 0.3rem 0.5rem 0.3rem 0.75rem;
  height: 55px;
  position: sticky;
  top: 0px;
  // z-index: 9999;
  // box-sizing: border-box;
  // /* background-color: #1b1c22; */
  // background: linear-gradient(193.68deg, #1b1c22 0.68%, #000000 100.48%);
  color: ${({ theme }) => theme.bg2};
  display: flex;
  justify-content: space-between;
  width: 100%;

  // @media screen and (max-width: 800px) {
  //   grid-template-columns: 1fr;
  //   position: relative;
  // }

  // @media screen and (max-width: 600px) {
  //   padding: 1rem;
  // }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  /* background: linear-gradient(45deg, #ac50ef, #7059fb 50%, #2ecff6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  */
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 30px;
  margin-left: 30px;
  // margin: 30px ;
  :hover {
    opacity: 1;
  }
`

const DesktopWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  justify-content: space-between;
  height: 70px;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  a {
    color: ${({ theme }) => theme.white};
  }
`

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: white;
  opacity: 0.4;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green1};
`
const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()

  return (
    <Wrapper isMobile={below1080}>
      {!below1080 ? (
        <DesktopWrapper>
          {/* <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}> */}
          {!below1080 && (
            // <AutoColumn gap="1.25rem" style={{ marginTop: '1rem' }}>
            <RowFixed>
              <UniIcon id="link" onClick={() => history.push('/')}>
                <img width={'110px'} src={Logo} alt="logo" style={{ marginRight: '.75rem', marginLeft: '.75rem' }} />
              </UniIcon>
              <BasicLink to="/home">
                <Option activeText={history.location.pathname === '/home' ?? undefined}>
                  <TrendingUp size={20} style={{ marginLeft: '.3rem', marginRight: '.5rem' }} />
                  Overview
                </Option>
              </BasicLink>
              <BasicLink to="/tokens">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'tokens' ||
                      history.location.pathname.split('/')[1] === 'token') ??
                    undefined
                  }
                >
                  <Disc size={20} style={{ marginRight: '.75rem' }} />
                  Tokens
                </Option>
              </BasicLink>
              <BasicLink to="/pairs">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'pairs' ||
                      history.location.pathname.split('/')[1] === 'pair') ??
                    undefined
                  }
                >
                  <PieChart size={20} style={{ marginRight: '.75rem' }} />
                  Pairs
                </Option>
              </BasicLink>

              <BasicLink to="/accounts">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'accounts' ||
                      history.location.pathname.split('/')[1] === 'account') ??
                    undefined
                  }
                >
                  <List size={20} style={{ marginRight: '.75rem' }} />
                  Accounts
                </Option>
              </BasicLink>

              <BasicLink to="/swap">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'swap' ||
                      history.location.pathname.split('/')[1] === 'swap') ??
                    undefined
                  }
                >
                  <RefreshCw size={20} style={{ marginRight: '.75rem' }} />
                  Swap
                </Option>
              </BasicLink>
            </RowFixed>
            // </AutoColumn>
          )}
          {/* </AutoColumn> */}
          {/* <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}> */}
          {/* <HeaderText>
            <Link href="https://openexa.com/" target="_blank">
              Openexa.com
            </Link>
          </HeaderText>
          <HeaderText>
            <Link href="https://discord.com/invite/FCfyBSbCU5" target="_blank">
              Discord
            </Link>
          </HeaderText>
          <HeaderText>
            <Link href="https://twitter.com/UniswapProtocol" target="_blank">
              Twitter
            </Link>
          </HeaderText>
          <Toggle isActive={isDark} toggle={toggleDarkMode} /> */}
          {/* </AutoColumn> */}
          {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="/" style={{ color: 'white' }}>
                <TYPE.small color={'white'}>
                  Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                </TYPE.small>
              </a>
            </Polling>
          )}
        </DesktopWrapper>
      ) : (
        <MobileWrapper>
          <Title />
        </MobileWrapper>
      )}
    </Wrapper>
  )
}

export default withRouter(SideNav)
