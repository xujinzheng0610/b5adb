import React from "react";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import Router from 'next/router';

export const login = async (token) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/project')
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  window.localStorage.removeItem("b5aDBtoken");
  Router.push('/login')
}

export const withLoginGate = WrappedComponent => 
  class extends React.Component {

    static async getInitialProps (ctx) {
      const token = auth(ctx)

      const componentProps = 
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token}
    }

    constructor (props) {
      super(props)

      this.syncLogout = this.syncLogout.bind(this)
    }

    componentDidMount () {
      window.addEventListener('storage', this.syncLogout)
    }

    componentWillUnmount () {
      window.removeEventListener('storage', this.syncLogout)
      //window.localStorage.removeItem('logout')
    }

    syncLogout (event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

export const auth = ctx => {
  const {token} = nextCookie(ctx)

    /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }
  
  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/login')
  }

  return token
}

export default withLoginGate;
