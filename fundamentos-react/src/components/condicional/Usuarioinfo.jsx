import React from 'react'

import If from './If'
export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Stalker</strong>!
            </If>
            

        </div>
    )


}