import React from 'react';
import Componente from './Componente';
import click from './Componente';
import DownloadCassandra from './DownloadCassandra';


export default function CallF(params) {
    if(click!=true){
        return <Componente/>
    }else{
            return <DownloadCassandra/>
    }
} 


	

            



