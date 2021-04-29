import { Button, Card  } from 'antd';
import { useEffect, useState } from "react";
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import CUD from "../utils-config/call";
import Header from "../component/Header";

import translate from "translate";

export default function Home() {

const [listado, setListado] = useState('')
const [usuario, setOtros] = useState('')


useEffect( async ()=> {
    // if (listado !== '' || usuario !== '') return
    //     CUD('posts').then(responseBody => {
    //         setListado(responseBody)
    //     })
    // const text = await translate("Hello world", "es");
    // console.log(text);
}, [listado, usuario])

function handleSubmit() {
    CUD('users').then(responseBody => {
        setOtros(responseBody)
    })
}

// const text = translate("Hello world", "es");
// console.log(text);

  return (
    <div>
        <Header/>

        <section id="section1">
            <div className="container__text">
                <h4 className="text-white">WELCOME TO MY WEBSITE</h4>
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
        {/*<section*/}
        {/*    id="section2"*/}
        {/*    style={{ height: "800px", background: "white" }}*/}
        {/*>*/}
        {/*    <div className="container">*/}
        {/*        <div className="row py-5">*/}
        {/*            <div className="col-12 text-center">*/}
        {/*                <h1>holaa</h1>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*<section*/}
        {/*    id="section3"*/}
        {/*    style={{ height: "800px", background: "yellow" }}*/}
        {/*>*/}
        {/*    section 3*/}
        {/*</section>*/}

        {/*<h1>Example</h1>*/}
        {/*<div className="container">*/}
        {/*    <div className="row">*/}
        {/*        {listado && listado.map((item, key) =>*/}
        {/*            <div className="col-4 mt-5 d-flex w-100" key={key}>*/}
        {/*                <Card title={item.title} bordered={false} style={{ width: 300 }}>*/}
        {/*                    <p>{item.body}</p>*/}
        {/*                </Card>*/}
        {/*            </div>*/}
        {/*        )}*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*        {usuario && usuario.map((item, key) =>*/}
        {/*            <div className="col-4 mt-5 d-flex w-100" key={key}>*/}
        {/*                <Card title={item.username} bordered={false} style={{ width: 300 }}>*/}
        {/*                    <p>{item.email}</p>*/}
        {/*                </Card>*/}
        {/*            </div>*/}
        {/*        )}*/}
        {/*    </div>*/}
        {/*    <div className="col-12 mt-5 text-center">*/}
        {/*        <Button type="primary" onClick={handleSubmit}>*/}
        {/*            Primary*/}
        {/*        </Button>*/}
        {/*    </div>*/}
        {/*</div>*/}



    </div>
  )
}
