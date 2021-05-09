import React from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../redux/store/store'
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'
import App from 'next/app'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '../public/static/asset/scss/app.scss'
import {HeaderItems} from "../redux/reducers/header/actions";


class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        return { pageProps }
    }

    render() {

        const {Component, pageProps, store} = this.props

        return (
            <div>
                <Head>
                    <title>perfil | jesus G</title>h
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"/>

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                          crossOrigin="anonymous"/>

                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous"/>

                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                            crossOrigin="anonymous"/>

                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js"
                            integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P"
                            crossOrigin="anonymous"/>

                </Head>
                <Provider store={store}>
                    <Component {...Object.assign(pageProps)} />
                </Provider>
            </div>
        )
    }
}

export default withRedux(makeStore, {
    serializeState: state => state.toJS(),
    deserializeState: state => fromJS(state)
})(MyApp)
