import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
// reactstrap components
import {
    Button,
    Row,
    Col,
    Form,
    TabPane,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            address: '',
            phonenumber: '',
            birthdate: '',
            description: '',
            profilepicture: '',
            services: {
                cleaning: false,
                cat: false,
                dog: false,
                baby: false,
                tutor: false,
                handy: false,
                it: false,
                garden: false,
                music: false
            }
        };
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handlePhonenumber = this.handlePhonenumber.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleBirthdate = this.handleBirthdate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleCleaning = this.handleCleaning.bind(this);
        this.handleDog = this.handleDog.bind(this);
        this.handleCat = this.handleCat.bind(this);
        this.handleBaby = this.handleBaby.bind(this);
        this.handleTutor = this.handleTutor.bind(this);
        this.handleHandy = this.handleHandy.bind(this);
        this.handleIt = this.handleIt.bind(this);
        this.handleGarden = this.handleGarden.bind(this);
        this.handleMusic = this.handleMusic.bind(this);
    }


    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            city: '',
            address: '',
            phonenumber: '',
            birthdate: '',
            description: '',
            profilepicture: '',
            services: {
                cleaning: false,
                cat: false,
                dog: false,
                baby: false,
                tutor: false,
                handy: false,
                it: false,
                garden: false,
                music: false
            }
        })
    }

    handleBirthdate(e) {
        console.log("hier")
        let birthdate
        if (e.isAMomentObject) {
            birthdate = e.toDate();
        } else {
            birthdate = e
        }
        this.setState({ birthdate: birthdate });
    }

    handleCity(e) {
        let value = e.target.value;
        this.setState({ city: value });
    }

    handleAddress(e) {
        let value = e.target.value;
        this.setState({ address: value });
    }

    handlePhonenumber(e) {
        let value = e.target.value;
        this.setState({ phonenumber: value });
    }

    handleDescription(e) {
        let value = e.target.value;
        this.setState({ description: value });
    }

    handleCleaning(e) {
        let value = e.target.value;
        let cleaningValue;
        if (value === "on") { cleaningValue = true }
        else { cleaningValue = false }
        this.setState({
            services: {
                ...this.state.services,
                cleaning: cleaningValue
            }
        })
    }

    handleCat(e) {
        let value = e.target.value;
        let catValue;
        if (value === "on") { catValue = true }
        else { catValue = false }
        this.setState({
            services: {
                ...this.state.services,
                cat: catValue
            }
        })
    }

    handleDog(e) {
        let value = e.target.value;
        let dogValue;
        if (value === "on") { dogValue = true }
        else { dogValue = false }
        this.setState({
            services: {
                ...this.state.services,
                dog: dogValue
            }
        })
    }

    handleBaby(e) {
        let value = e.target.value;
        let babyValue;
        if (value === "on") { babyValue = true }
        else { babyValue = false }
        this.setState({
            services: {
                ...this.state.services,
                baby: babyValue
            }
        })
    }

    handleTutor(e) {
        let value = e.target.value;
        let tutorValue;
        if (value === "on") { tutorValue = true }
        else { tutorValue = false }
        this.setState({
            services: {
                ...this.state.services,
                tutor: tutorValue
            }
        })
    }

    handleHandy(e) {
        let value = e.target.value;
        let handyValue;
        if (value === "on") { handyValue = true }
        else { handyValue = false }
        this.setState({
            services: {
                ...this.state.services,
                handy: handyValue
            }
        })
    }

    handleIt(e) {
        let value = e.target.value;
        let itValue;
        if (value === "on") { itValue = true }
        else { itValue = false }
        this.setState({
            services: {
                ...this.state.services,
                it: itValue
            }
        })
    }

    handleGarden(e) {
        let value = e.target.value;
        let gardenValue;
        if (value === "on") { gardenValue = true }
        else { gardenValue = false }
        this.setState({
            services: {
                ...this.state.services,
                garden: gardenValue
            }
        })
    }

    handleMusic(e) {
        let value = e.target.value;
        let musicValue;
        if (value === "on") { musicValue = true }
        else { musicValue = false }
        this.setState({
            services: {
                ...this.state.services,
                music: musicValue
            }
        })
    }

    render() {
        /** 
        this.setState({
            city: this.props.city,
            address: this.props.address,
            phonenumber: this.props.phonenumber,
            birthdate: this.props.birthdate,
            description: this.props.description,
            services: this.props.services
        });
        */
        return (
            <TabPane tabId="iconTabs1">
                <Form role="form" onSubmit={(e) => { this.props.handleProfileSubmit(e, this.state) }}>
                    <h2>
                        Wijzig je profiel
                    </h2>
                    <br />
                    <Row>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">
                                Geboortedatum
                                </p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <ReactDatetime
                                        onChange={this.handleBirthdate}
                                        inputProps={{
                                            placeholder: "Date Picker Here"
                                        }}
                                        dateFormat={true}
                                        timeFormat={false}
                                        defaultValue={moment(this.props.birthdate)}
                                    />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">
                                Stad
                                </p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input defaultValue={this.props.city} onChange={this.handleCity} placeholder="Amsterdam" type="text" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg="3" sm="6">
                            <p className="lead my-0">
                                Adres
                                </p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input defaultValue={this.props.address} onChange={(value) => this.handleAddress(value)} placeholder="Stationsplein 1" type="text" />
                            </FormGroup>
                        </Col>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">
                                Telefoonnummer
                                </p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input defaultValue={this.props.phonemumber} onChange={this.handlePhonenumber} placeholder="0612345678" type="text" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <br />
                    <h2>
                        Vertel wat over jezelf!
                    </h2>
                    <br />
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input defaultValue={this.props.description} style={{ resize: "none" }} onChange={this.handleDescription} placeholder="I am awesome!" type="textarea" rows="5" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <br />
                    <h2>
                        Welke diensten bied je aan?
                    </h2>
                    <br />
                    <Row>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.cleaning ? <input
                                    className="custom-control-input"
                                    id="cleaning"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleCleaning}
                                /> : <input
                                        className="custom-control-input"
                                        id="cleaning"
                                        type="checkbox"
                                        onChange={this.handleCleaning}
                                    />}
                                <label className="custom-control-label" htmlFor="cleaning">
                                    <span>Schoonmaken</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.cat ? <input
                                    className="custom-control-input"
                                    id="cat"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleCat}
                                /> : <input
                                        className="custom-control-input"
                                        id="cat"
                                        type="checkbox"
                                        onChange={this.handleCat}
                                    />}
                                <label className="custom-control-label" htmlFor="cat">
                                    <span>Katoppas</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.dog ? <input
                                    className="custom-control-input"
                                    id="dog"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleDog}
                                /> : <input
                                        className="custom-control-input"
                                        id="dog"
                                        type="checkbox"
                                        onChange={this.handleDog}
                                    />}
                                <label className="custom-control-label" htmlFor="dog">
                                    <span>Hondenuitlaat</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.baby ? <input
                                    className="custom-control-input"
                                    id="baby"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleBaby}
                                /> : <input
                                        className="custom-control-input"
                                        id="baby"
                                        type="checkbox"
                                        onChange={this.handleBaby}
                                    />}
                                <label className="custom-control-label" htmlFor="baby">
                                    <span>Babysitter</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.tutor ? <input
                                    className="custom-control-input"
                                    id="tutor"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleTutor}
                                /> : <input
                                        className="custom-control-input"
                                        id="tutor"
                                        type="checkbox"
                                        onChange={this.handleTutor}
                                    />}
                                <label className="custom-control-label" htmlFor="tutor">
                                    <span>Bijles</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.handy ? <input
                                    className="custom-control-input"
                                    id="handy"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleHandy}
                                /> : <input
                                        className="custom-control-input"
                                        id="handy"
                                        type="checkbox"
                                        onChange={this.handleHandy}
                                    />}
                                <label className="custom-control-label" htmlFor="handy">
                                    <span>Klusjes</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.it ? <input
                                    className="custom-control-input"
                                    id="it"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleIt}
                                /> : <input
                                        className="custom-control-input"
                                        id="it"
                                        type="checkbox"
                                        onChange={this.handleIt}
                                    />}
                                <label className="custom-control-label" htmlFor="it">
                                    <span>IT hulp</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.garden ? <input
                                    className="custom-control-input"
                                    id="garden"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleGarden}
                                /> : <input
                                        className="custom-control-input"
                                        id="garden"
                                        type="checkbox"
                                        onChange={this.handleGarden}
                                    />}
                                <label className="custom-control-label" htmlFor="garden">
                                    <span>Tuinieren</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.music ? <input
                                    className="custom-control-input"
                                    id="music"
                                    type="checkbox"
                                    defaultChecked="true"
                                    onChange={this.handleMusic}
                                /> : <input
                                        className="custom-control-input"
                                        id="music"
                                        type="checkbox"
                                        onChange={this.handleMusic}
                                    />}
                                <label className="custom-control-label" htmlFor="music">
                                    <span>Muziekles</span>
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Button
                        align="right"
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        type="submit"
                    >
                        <span className="btn-inner--icon mr-1">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </span>
                        <span style={{ right: "10px" }} className="btn-inner--text">
                            Save
                    </span>
                    </Button>
                </Form>
            </TabPane >
        );
    }
}


EditProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    birthdate: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    name: state.profile.name,
    email: state.profile.email,
    address: state.profile.address,
    birthdate: state.profile.birthdate,
    city: state.profile.city,
    phonenumber: state.profile.phonenumber,
    description: state.profile.description,
    services: state.profile.services
});

export default connect(mapStateToProps)(EditProfile);