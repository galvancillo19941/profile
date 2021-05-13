import React, { useEffect, useRef } from 'react'
import TypistLoop from 'react-typist-loop';
import Typist from 'react-typist';
import { Progress } from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';

import Header from "../component/Header";

import lottie from 'lottie-web'

import dataProjects from '../APIDATA/dataProjects'

export default function Home({}) {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            mode: 'bounce',
            animationData: require('../public/static/asset/img/profile.json')
        })
    }, [])

    const Skills = [
        {
            id: 1,
            name: 'HTML / CSS / SASS / STYLUS',
            percent: 95
        },
        {
            id: 2,
            name: 'JAVASCRIPT',
            percent: 70
        },
        {
            id: 3,
            name: 'REACT.JS',
            percent: 60
        },
        {
            id: 4,
            name: 'NEXT.JS',
            percent: 70
        },
        {
            id: 5,
            name: 'BOOTSTRAP',
            percent: 100
        }
    ]

  return (
    <div>
        <Header/>
        <section id="section1">
            <div className="container__text">
                <h4 className="text-white">Bienvenido a mi sitio Web</h4>
                <div>
                    <TypistLoop interval={3000}>
                        {[
                            'Web Designer',
                            'Web Developer',
                            'React Developer',
                        ].map(text =>
                            <Typist key={text} startDelay={900} acount={12}>
                                {text}
                            </Typist>)}
                    </TypistLoop>
                   <button className="btn__primary mt-5">
                       Contactame
                   </button>
                </div>
            </div>
            <div className="scroll-efect">
                <span className="mouse">
                        <span className="mouse-movement"></span>
                </span>
            </div>
        </section>

        <section
            id="section2"
            style={{ background: "white" }}
        >
            <div className="container">
                <div className="row py-5">
                    <div className="container-profile">
                        <div className="mt-2 mt-md-5 description">
                            <h2 className="font-weight-bold">Jesús González</h2>
                            <h5 className="">Front-end Developer</h5>
                            <p className="mt-4">
                                Soy un desarrollador Front-end, trabajando durante los
                                últimos cuatro años. Tengo experiencia trabajando con clientes locales.
                                Tengo un vasto conocimiento en html, css, sass, Bootstrap
                                Javascript, React, Next-Js, Hooks, Redux (javascript framewok), etc.
                            </p>
                            <a href="/static/asset/pdf/cv.pdf" target="_blank">
                                <button className="btn__primary mt-4 align-items-center d-none d-md-flex">
                                    Descargar CV
                                    <DownloadOutlined className="ml-2"/>
                                </button>
                            </a>
                        </div>
                        <div className="container-img">
                            <div ref={container}/>
                            {/*<img src="/static/asset/img/imgProfile.jpg" alt=""/>*/}
                        </div>
                        <div className="mt-5 Skills">
                            <h2 className="font-weight-bold">Mis habilidades</h2>
                            <div>
                                {Skills.map((item, key) =>
                                    <div className="progress-container" key={key}>
                                        <span>{item.name}</span>
                                        <Progress percent={item.percent} status="active" strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#E91E63',
                                        }}/>
                                    </div>
                                )}
                            </div>
                            <a href="/static/asset/pdf/cv.pdf" target="_blank">
                                <button className="btn__primary mt-5 d-flex d-md-none align-items-center">
                                    Descargar CV
                                    <DownloadOutlined className="ml-2"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="section3"
        >
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 text-center">
                        <h2>Portafolio</h2>
                    </div>
                    <div className="container-images-portafolio">
                        {
                            dataProjects.map((item, key) =>
                                <div className="tab">
                                    <div className="column-8 hide-xs box-tab hide-sm hide-md">
                                        <div className="effect grid-width8 effect-seven">
                                            <img src={item.img}
                                                 className=""/>
                                            <div className="tab-text">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
