import React, {Component} from "react"
import Input from "../../Components/InputWithText"
import Button from '../../Components/Button'
import Select from '../../Components/Select'
import history from '../../utils'
import style from "./style.scss"


const peopleText = "Person(s) Authorised to Book Journeys with Metro Express";
const behalfOfText1 = "On behalf of ….. I/We hereby agree for a Monthly Charge Account for transportation with Metro Express Ltd With immediate effect."
const behalfOfText2 = "I/We agree to pay the invoice when rendered within 14 days of receipt."

const elementFactory = (type, id) => {
  switch (type) {
    case 'phone':
      return {placeholder: "Telephone Number(s)", text: "Telephone Number(s)", value: '', id, error: ''};
    case 'people':
      return {placeholder: peopleText, text: peopleText, value: '', id};
    case 'behalfOf':
      return {placeholder: "On behalf of....", text: behalfOfText1, text2: behalfOfText2, id, value: ''};
    default:
      console.error(`${type} is undefined`)
  }
}

const TextInput = ({placeholder, text, id, handleChange, className, ...rest}) => (
  <div className={className} >
    <Input placeholder={placeholder}
           text={text}
           id={id}
           handler={handleChange}
           {...rest}
    />
    {rest.error && rest.touched ? <span style={{color: 'red'}}> {rest.error} </span> : null}

  </div>
)

const validateNull = (data, otherInc) => {
  console.log(otherInc)
  let stack = [];
  const {other, ...rest} = data;
  Object.values(otherInc ? data : rest).map(i => {

    if(Array.isArray(i)) {
      for (let j =0; j < i.length; j++) {
          if(i[j].value.length < 1) stack = [...stack, false]
          else stack = [...stack, true]
      }
    } else {

      if(i.length < 1) stack = [...stack, false]
      else stack = [...stack, true]
    }
  })

  if (stack.filter(i => i !== true).length === 0) return true
  return false

}
class Form extends Component {
  state = {
    formData: {
      phone: [{placeholder: "Telephone Number(s)", text: "Telephone Number(s)", id: 'phone', value: '' }],
      people: [{placeholder: peopleText, text: peopleText, id: 'people', value: ''}],
      behalfOf: [{placeholder: "Authorised Person(s) on behalf of the company", text: behalfOfText1, text2: behalfOfText2, id: 'behalfOf', value: ''}],
      status: '',
      other: '',
      applicantComp: '',
      postAddr: '',
      postCode: '',
      email: '',
    },
    touched: {
      status: 0,
      other: 0,
      applicantComp: 0,
      postAddr: 0,
      postCode: 0,
      email: 0,
    },
    error: '',
  };

  bindHandler = (type, payload) => {
    let action;
    console.log({ type, payload })


    switch (type) {
      case "phone-add":
      case "people-add":
      case "behalfOf-add":
        action = type.split('-')[0];
        return this.setState(({formData}) => ({
          formData: {
            ...formData,
            [action]: [
              ...formData[action],
              elementFactory(action, `${action}+${(formData[action].length === 0) ? "" : formData[action].length}`)
            ]}
        }), () => { console.log(this.state)});

      case "phone-remove":
      case "people-remove":
      case "behalfOf-remove":
        action = type.split('-')[0];

        console.log({ action })
        console.log( `${action}-${payload}`)
        return this.setState(({formData}) => ({
          formData: {
            ...formData,
            [action]: [ ...formData[action].filter((i) => i.id !== payload.id) ]
          }
        }));
      case "onChange":
        return this.onChange(payload)

      default:
        console.error(`${type} is not defined`)
    }
  }

  onChange = ({type, id, value}) => {
    if(type) {
      return this.setState(({formData}) => ({
        formData: {
          ...formData,
          [type]: [...formData[type].reduce((acc, item) => {
            if (item.id === id) {
                item.value = value
            }
            acc = [...acc, item]
            return acc
          }, [])]
        }
      }))
    }

    console.log(id,value)
    return this.setState(({formData}) => ({
      formData : {
        ...formData,
        [id]: value
      }
    }))
  }
  handleChange = (val) => {
    this.setState(({formData}) => ({
       formData: {...formData, status: val}
    }))
  }



  render() {
    const {formData: {phone, behalfOf, people, status}, error} = this.state;
    const formList = [phone, people, behalfOf];
    console.log(this.props)
    return (
      <div className="row no-gutters">
        <div className="col-md-12">
          <Select placeholder="Status" text={"Status"}
                  handleChange={this.handleChange}/>
        </div>
        {status === "Other" ?
          <TextInput
            placeholder="Please specify the other"
            text="Please specify the other"
            id="other"
            className="col-md-12"
            value={this.state.formData.other}
            handleChange={(id, value) => this.bindHandler("onChange", {id, value})}
          />
          : null}

        <TextInput
          placeholder="Name of the Applicant Company"
          text="Name of the Applicant Company"
          id="applicantComp"
          className="col-md-12"
          value={this.state.formData.applicantComp}
          handleChange={(id, value) => this.bindHandler("onChange", {id, value})}/>

        <TextInput
          placeholder="Address"
          text="Address"
          id="postAddr"
          className="col-md-12"
          value={this.state.formData.postAddr}
          handleChange={(id, value) => this.bindHandler("onChange", {id, value})}
        />

        <TextInput
          placeholder="Post Code"
          text="Post Code"
          id="postCode"
          className="col-md-6"
          value={this.state.formData.postCode}
          handleChange={(id, value) => this.bindHandler("onChange", {id, value})}
        />

        <TextInput
          placeholder="Email Adress"
          text="Email Adress"
          id="email"
          className="col-md-6"
          value={this.state.formData.email}
          onBlur={() => this.setState({touched: {...this.state.touched, email: 1}})}
          handleChange={(id, value) => this.bindHandler("onChange", {id, value})}
          touched={this.state.touched.email}
          error={this.state.error}
        />


        {formList.map((item) => {
          return item.map(({ id, ...rest }, index) => {
            const mutateStr = id.split('+')[0];
            return (
              <div className="col-md-12"
                   style={{position: "relative", paddingRight: 76}}
                   key={index}
              >
                {(index === 0) ?
                  (<Input {...rest} id={id}
                          handler={(id, value) => this.bindHandler('onChange', {id, value, type: mutateStr})}

                  />) :
                  (<Input placeholder={rest.placeholder} id={id}
                          handler={(id, value) => this.bindHandler("onChange", {id, value, type: mutateStr})}

                  />)
                }
                <div className={style.circlebuttononformbig}>
                  <Button
                    type="round"
                    cb={() => {index === 0
                      ? this.bindHandler(`${mutateStr}-add`)
                      : this.bindHandler(`${mutateStr}-remove`, {index, id})}
                    }
                    del={index !== 0}
                  />
                </div>
              </div>
            )
          })
        })}

        <div className="col-md-12">
          <span className={style.info}>Note: All Journeys can also be booked via Metro Express Website or Smart-Phone App Store. Once the Account is set-up please request for the Login Username and Password.</span>
          <Button text={"Get PDF Document"}
                  disabled={!validateNull(this.state.formData, status === "Other")}
                  isActive={validateNull(this.state.formData, status === "Other") }
                  cb={() => history.push("/pdf", this.state.formData)}
          />
        </div>
      </div>
    )
  }
}


export default Form