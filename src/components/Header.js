import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import HeaderDropdown from 'Components/HeaderDropdown'
import { Button } from '_system/Button'
import { GhostWrapper, GhostSmall } from '_system/Ghost'
import {
  HeaderWrapper,
  HeaderContainer,
  NavList,
  NavItem,
  HeaderBar,
  HeaderLogo,
  HeaderUsername,
} from 'Styled/Header'

@inject('userStore', 'authStore')
@observer
class Header extends React.Component {
  // TODO: rewrite this and the logout system..?
  logout = () => {
    const { userStore, authStore } = this.props
    const success = authStore.logoutUser()
    if (success) {
      userStore.removeMe(success)
      this.props.history.push('/login')
    }
  }

  render() {
    const { userStore: { me, pullingLoginData } } = this.props
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <NavList>
            <Link to="/">
              <HeaderLogo>Unravel</HeaderLogo>
            </Link>
            <NavItem spaceRight>
              <Link to="/start">
                <Button border>
                  start
                </Button>
              </Link>
            </NavItem>
            <GhostWrapper isDoneRendering={pullingLoginData}>
              <GhostSmall />
            </GhostWrapper>
            {!me && !pullingLoginData
            && <>
              <NavItem>
                <Link to="/login">
                  <Button border>
                    Login
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/register">
                  <Button fillWhite>
                    Sign Up
                  </Button>
                </Link>
              </NavItem>
            </>
            }
            {me && !pullingLoginData
             && <HeaderDropdown me={me} logout={this.logout} />
            }
            {/* <HeaderBar /> */}
          </NavList>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  history: PropTypes.shape({}).isRequired,
}

Header.wrappedComponent.propTypes /* remove-proptypes */ = {
  userStore: PropTypes.object.isRequired,
  authStore: PropTypes.object.isRequired,
}

export default withRouter(Header)
