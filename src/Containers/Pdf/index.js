import React from 'react';
import logo from '../../../assets/logo.png'
import tfl from "../../../assets/tfl.png"
import logos from "../../../assets/logos.jpg";

import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import moment from "moment";

Font.register( "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf", { family: 'Osward' });


// Create styles

// Create Document Component
const MyDocument = ({data}) => (
  <Document>
    {console.log(data)}
    <Page size="A4" style={styles.page}>
     <View style={{flexDirection: "row"}}>
       <View style={styles.section}>
         <Image src={tfl} style={{width: 128, height: 49}}/>
       </View>
       <View style={styles.section}>
         <Image src={logo} style={{width: 63, height: 63, marginRight: 20, marginLeft:150}}/>
         <View style={{justifyContent: "start", alignItems: "center"}}>
           <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 25}}> <Text style={{color: "#1A1A1A"}}>METRO</Text><Text style={{color:"#339CFF"}}>EXPRESS</Text> </Text>
           <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 12}}>24 hr/ Minicab and Courier Service</Text>
         </View>
       </View>
     </View>
      <View style={{height: 2, width: "90%", backgroundColor: "#339CFF", marginLeft: "5%", marginBottom: 20}}/>
      <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 15, marginLeft: 150, marginBottom: 30}}> APPLICATION FOR A MONTHLY CHARGE ACCOUNT </Text>
      <View style={{padding: 30}}>
        <View style={{marginLeft: 10}}>
          <Text style={styles.title}>
            Name of the Applicant Company: <Text style={styles.answer}>{data.applicantComp}</Text>
          </Text>

          <Text style={styles.title}>
            Status: <Text style={styles.answer}>{data.status === "Other" ? data.other : data.status}</Text>
          </Text>

          <Text style={styles.title}>
            Address: <Text style={styles.answer}>{data.postAddr}</Text>
          </Text>

          <Text style={styles.title}>
            Postcode: <Text style={styles.answer}>{data.postCode}</Text>
          </Text>

          <Text style={styles.title}>
            Telephone Numbers: {data.phone.map((i, index) => (
            <Text style={styles.answer} key={index}> {i.value}  </Text>
          ))}
          </Text>

          <Text style={styles.title}>
            {data.people.length > 1 ? "People" : "Person"} Authorised to book journeys with Metro Express: {data.people.map((i, index) => (
            <Text style={styles.answer} key={index}> {i.value}, </Text>
          ))}
          </Text>
        </View>
        <View style={{padding: 35, marginBottom: 40}}>

          <Text style={styles.answer}>
            On behalf of <Text style={styles.title}>{data.applicantComp} </Text>

            {data.behalfOf.length > 1 ? "We" : "I"} herebly agree for the Monthly Charge Account for
            transportation from Metro Express Ltd with immediate effect.
          </Text>

          <Text style={{fontFamily: "Times-Roman", fontSize: 13,  marginTop: 20}}>
            {data.behalfOf.length > 1 ? "We" : "I"} agree to pay the monthly invoice when rendered within 14 days of receipt.
          </Text>
          <View style={{flexDirection: "row", fontFamily: "Osward", fontWeight:"bold", fontSize: 13, marginTop: 10 }}>
            <Text style={{marginRight: 5}}>Full Name: </Text>
            {data.behalfOf.map(i => (
              <Text>  {i.value}  </Text>
            ))}
          </View>
        </View>

        <View style={{flexDirection: "row", marginTop: 2, marginBottom: 80}}>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 13, marginLeft: 32, marginBottom: 10, marginRight: 140}}>Signed.................................</Text>
          <Text style={styles.title}>Date: <Text style={styles.answer}>{moment().format("DD/MM/YYYY")} </Text></Text>
        </View>

        <Text style={{fontSize: 10, padding: 10}}>All Journeys can also be booked via the Metro Express Website or via the Smart-Phone App Store. Once the Account is set-up please request for the Login Username and Password</Text>
      </View>

      <View style={{height: 2, width: "90%", backgroundColor: "#339CFF", marginLeft: "5%", marginBottom: 5}}/>
      <View>
        <View style={{flexDirection: "row", marginLeft: 5}}>
          <Image src={logos} style={{width: 200, height: 30}}/>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 10, marginRight: 8}}>Head Office: <Text style={{fontFamily: "Times-Roman", fontSize: 10}}>624 Lardship Lane, London, N22 5JH</Text></Text>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 10, marginRight: 3}}>Tel: <Text style={{fontFamily: "Times-Roman", fontSize: 10}}>020 8888 3000</Text></Text>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 10}}>Fax: <Text style={{fontFamily: "Times-Roman", fontSize: 10}}>020 8888 7446</Text></Text>
        </View>
        <View style={{flexDirection: "row", marginLeft: 335}}>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 10, marginRight: 8}}>www.metroexpress.cab</Text>
          <Text style={{fontFamily: "Osward", fontWeight:"bold", fontSize: 10, marginRight: 3}}>e-mail: metroexpress@btconnect.com</Text>

        </View>
      </View>

    </Page>
  </Document>
);

const styles = StyleSheet.create({
  title: {fontFamily: "Osward", fontWeight:"bold", fontSize: 13, marginBottom: 10},
  answer: {fontFamily: "Times-Roman", fontSize: 13, },
  page: {
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "row"
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  }
});

export default MyDocument