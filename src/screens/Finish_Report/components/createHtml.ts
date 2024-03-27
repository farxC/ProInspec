import { ReportFormData } from "../../Create_Report/types/t"




export const createHTML=(data: ReportFormData): string => {
    
    
    const html: string = `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <script>
    
        </script>
        <style> ${htmlStyles} </style>
    </head>
    <body>
        <div class="pagina">
                <div class="header">
                  <img class='proinspec-logo' src="file:///android_asset/images/ProInspec-LOGO.png" />
                  <span class="texto_header">Relatório de Reparo</span>
                  <img class="eldorado-brasil" src="file:///android_asset/images/Eldorado-Full.png"/>
                  
                </div>
            
                <div class="outputs">
                    <div>
                    <div class="infos">
                        <div class="texto_infos">
                        <div class="output1">Executor: ${data.username}</div>
                        <div class="output2">Disciplina: </div>
                        <div class="output3">Data: ${data.date}</div>
                        <div class="output4">Local de Instalação: ${data.local}</div>
                        <div class="output5">N° da Ordem: ${data.order} </div>
                        <div class="output6">Código do Material: ${data.materialcode}</div>
                        <div class="output7">N° da Nota: ${data.note}</div>
                        <div class="output8">Atividade: ${data.env}</div>
                    </div>
                    </div>
                    <div>
                    <div class="obs" >
                        <div class="observacoes">Observações: ${data.comments}</div>
                    </div>
                    </div>
                    </div>
                </div>
  
  <div class="pagina2">
          <div class="header">
          <img class='proinspec-logo' src="file:///android_asset/images/ProInspec-LOGO.png" />
            <span class="texto_header">Relatório de Reparo</span>
            <img class="eldorado-brasil" src="file:///android_asset/images/Eldorado-Full.png"/>
          </div>
      
          <div class="grid_fotos">
            <span class="tit_obrigatorias">Fotos Obrigatórias</span>
             <div class="obrigatorias">
              <div class="idequi">
                  <div class="img1">
                    <img class="img-container" src=${data.images[0]} />
                    <div class="txt1">Id. do Equipamento</div>
                  </div>
              </div>

              <div class="visgeral">
                  <div class="img1">
                    <img class="img-container" src=${data.images[1]} />
                    <div class="txt2">Visão geral</div>
                  </div>
              </div>

              <div class="evidefalha">
                    <div class="img1">
                      <img class="img-container" src=${data.images[2]} />
                    <div class="txt3">Evidencia de Falha</div>
                  </div>
              </div>
            </div>

            <div class="tit_opcionais"> Fotos Opcionais </div>

            <div class="opcionais">   
              <div class="op1">
                <div class="img1">
                  <img class="img-container" src=${data.images[3]} />
                  <div class="txtop">Legenda</div>
                </div>
              </div>

              <div class="op2">
                <div class="img1">
                  <img class="img-container" src=${data.images[4]} />
                  <div class="txtop">Legenda</div>
                </div>
                
              </div>

              <div class="op3">
                <div class="img1"/>
                  <img class="img-container" src=${data.images[5]} />
                  <div class="txtop">Legenda</div>
                </div>
              </div>
            </div>

          </div>
   </div>

    `

    return html 

  }

const htmlStyles = `
.pagina{
  justify-content: center;
  background-color: white;
}

.pagina .header{
  display: flex;
}

.pagina .proinspec-logo{
  position: absolute;
  width: 20%;
  top: 0.3%;
  margin-left: 2%;
}

.pagina .texto_header{
  position: absolute;
  margin-left: 30%;
  font-family: 'Inter', Helvetica;
  font-weight: 400;
  color: #08501c;
  font-size: 200%;
  top: 4%;
}

.pagina .eldorado-brasil{
  position: absolute;
  width: 25%;
  margin-left: 73%;
  margin-top: -2%;
}

.pagina .outputs{
  width: 94.5%;
  height: 85%;
  background-color: #ffffff;
  margin-top: 15%;
  margin-left: 1.5%;
  font-size: 200%;
  font-weight: 600;
  color: #065A1E;
  font-family: 'Inter', Helvetica;
  position: absolute;
  border: 4px solid #7DAA8A;
  border-radius: 2%;
}

.pagina .infos{
  margin-top: 4%;
  margin-left: 4%;
}

.pagina .output1{
  margin-bottom: 5%;
}

.pagina .output2{
  margin-bottom: 5%;
}
.pagina .output3{
  margin-bottom: 5%;
}

.pagina .output4{
  margin-bottom: 5%;
}

.pagina .output5{
  margin-bottom: 5%;
}

.pagina .output6{
  margin-bottom: 5%;
}

.pagina .output7{
  margin-bottom: 5%;
}

.pagina .output8{
  margin-bottom: 5%;
}

.pagina .observacoes{
  width: 93%;
  height: 24%;
  position: absolute;
  margin-left: 1.0%;
  padding: 2%;
  border: 4px solid #065A1E;
  border-radius: 2%;
  border-color: #7DAA8A;
  font-size: 100%;
}

.pagina2{
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: space-between;
  background-color: white;
  top: 100%;
}

.pagina2 .proinspec-logo{
  position: absolute;
  width: 20%;
  top: 0.3%;
  margin-left: 2%;
}

.pagina2 .texto_header{
  position: absolute;
  margin-left: 30%;
  font-family: 'Inter', Helvetica;
  font-weight: 400;
  color: #08501c;
  font-size: 200%;
  top: 4%;
}

.pagina2 .eldorado-brasil{
  position: absolute;
  width: 25%;
  margin-left: 73%;
  margin-top: -2%;
}

.pagina2 .grid_fotos{
  width: 94.5%;
  height: 85%;
  background-color: #F8F1F1;
  margin-top: 15%;
  margin-left: 1.5%;
  font-size: 270%;
  font-weight: 600;
  color: #065A1E;
  font-family: 'Inter', Helvetica;
  position: absolute;
  border: 4px solid #7DAA8A;
  border-radius: 2%;
}

.pagina2 .tit_rel_foto{
  position: absolute;
  margin-top: 3%;
  margin-left: 4%;
  font-size: 80%;
}

.pagina2 .tit_obrigatorias{
  position: absolute;
  align-self: center;
  margin-top: 5%;
  margin-left: 33%;
  font-size: 80%;
}

.pagina2 .obrigatorias{
  display: flex;
}

.pagina2 .idequi{
  font-size: 70%; 
  position: absolute;
  margin-top: 15%;
  margin-left: 1%;
  background-color: #ffffff;
  height: 35%;
  width: 30%;
  border-radius: 15px;
  border: 3px solid #7DAA8A;
  
}
  .pagina2 .img1{
      margin: 0 auto;
      background-color: #D9D9D9;
      height: 60%;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
  }

  .pagina2 .txt1{
      position: absolute;
      align-text: center;
      bottom: 5%;
      margin-left: 10%;
  }

    .visgeral{
    font-size: 70%; 
    position: absolute;
    margin-top: 15%;
    margin-left: 35%;
    background-color: #ffffff;
    height: 35%;
    width: 30%;
    border-radius: 15px;
    border: 3px solid #7DAA8A;
    }

    .pagina2 .txt2{
      position: absolute;
      align-text: center;
      bottom: 5%;
      margin-left: 15%;
  }

  .evidefalha{
    font-size: 70%; 
    position: absolute;
    margin-top: 15%;
    margin-left: 68%;
    background-color: #ffffff;
    height: 35%;
    width: 30%;
    border-radius: 15px;
    border: 3px solid #7DAA8A;
    }

    .pagina2 .txt3{
      position: absolute;
      align-text: center;
      bottom: 5%;
      margin-left: 15%;
  }

  .pagina2 .tit_opcionais{
    position: absolute;
    margin-top: 61%;
    margin-left: 34%;
    font-size: 80%;
  }

  .pagina2 .op1{
    font-size: 70%; 
    position: absolute;
    margin-top: 70%;
    margin-left: 1%;
    background-color: #ffffff;
    height: 35%;
    width: 30%;
    border-radius: 15px;
    border: 3px solid #7DAA8A;
    flex-grow: 0;
    
  }
    .pagina2 .img1{
        margin: 0 auto;
        background-color: #D9D9D9;
        height: 60%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
  
    .pagina2 .txtop{
        position: absolute;
        text-align: center;
        bottom: 10%;
        align-items: center;
        justify-content: center;
        display: flex;
        transform: translate(50%,50%)
    }
  
      .op2{
      font-size: 70%; 
      position: absolute;
      margin-top: 70%;
      margin-left: 35%;
      background-color: #ffffff;
      height: 35%;
      width: 30%;
      border-radius: 15px;
      border: 3px solid #7DAA8A;
      flex-grow: 0;
      }
  
   
  
    .op3{
      font-size: 70%; 
      position: absolute;
      margin-top: 70%;
      margin-left: 68%;
      background-color: #ffffff;
      height: 35%;
      width: 30%;
      border-radius: 15px;
      border: 3px solid #7DAA8A;
      flex-grow: 0;
      }
      
      .img-container{
        width: 98%;
        height: 98%;
      }
`