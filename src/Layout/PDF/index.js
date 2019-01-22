import React from "react";
import PDF from "../../Containers/Pdf"
import {PDFViewer} from '@react-pdf/renderer';
import Background from "../../Components/Background";
import Footer from "../../Components/Footer"
import ApplicationSucess from "../../Components/Application"
import DownLoadHeader from "../../Components/DownloadHeader"

const PdfGenerator = ({location}) => (
  <div className="container-fluid" style={{padding: 0}}>
    <DownLoadHeader comp={PDF}/>
    <Background>
      <div className="row no-gutters" style={{width: '100%', height: "95vh"}}>
        <div className="col-md-6" style={{width: "100%", height: "100%"}}>
          <PDFViewer style={{width: '100%', height: "100%"}}>
            <PDF data={location.state}/>
          </PDFViewer>
        </div>
        <div className="col-md-6" style={{width: "100%", height: "100%"}}>
          <ApplicationSucess/>
        </div>
      </div>
    </Background>
    <Footer/>
  </div>
)

export default PdfGenerator