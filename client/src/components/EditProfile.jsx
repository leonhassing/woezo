import React from "react";
import moment from "moment";
import Croppie from "croppie";
import "assets/css/croppie.css";
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
            name: this.props.profileData.name,
            email: this.props.profileData.email,
            city: this.props.profileData.city,
            address: this.props.profileData.address,
            phonenumber: this.props.profileData.phonenumber,
            birthdate: this.props.profileData.birthdate,
            description: this.props.profileData.description,
            profilepicture: this.props.profileData.profilepicture,
            croppieobject: this.props.croppieobject,
            services: {
                cleaning: this.props.profileData.services.cleaning,
                cat: this.props.profileData.services.cat,
                dog: this.props.profileData.services.dog,
                baby: this.props.profileData.services.baby,
                tutor: this.props.profileData.services.tutor,
                handy: this.props.profileData.services.handy,
                it: this.props.profileData.services.it,
                garden: this.props.profileData.services.garden,
                music: this.props.profileData.services.music
            }
        };

        this.handlePictureUpload = this.handlePictureUpload.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
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

    isEmpty(str) {
        return !str || 0 === str.length;
    }

    handleBirthdate(e) {
        this.setState({ birthdate: e.toDate() });
    }

    handleName(e) {
        let value = e.target.value;
        this.setState({ name: value });
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState({ email: value });
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
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.cleaning = true;
        } else {
            newServices.cleaning = false;
        }
        this.setState({ services: newServices });
    }

    handleCat(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.cat = true;
        } else {
            newServices.cat = false;
        }
        this.setState({ services: newServices });
    }

    handleDog(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.dog = true;
        } else {
            newServices.dog = false;
        }
        this.setState({ services: newServices });
    }

    handleBaby(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.baby = true;
        } else {
            newServices.baby = false;
        }
        this.setState({ services: newServices });
    }

    handleTutor(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.tutor = true;
        } else {
            newServices.tutor = false;
        }
        this.setState({ services: newServices });
    }

    handleHandy(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.handy = true;
        } else {
            newServices.handy = false;
        }
        this.setState({ services: newServices });
    }

    handleIt(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.it = true;
        } else {
            newServices.it = false;
        }
        this.setState({ services: newServices });
    }

    handleGarden(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.garden = true;
        } else {
            newServices.garden = false;
        }
        this.setState({ services: newServices });
    }

    handleMusic(e) {
        var newServices = { ...this.state.services };
        if (e.target.checked) {
            newServices.music = true;
        } else {
            newServices.music = false;
        }
        this.setState({ services: newServices });
    }

    handlePictureUpload(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                profilepicture: reader.result
            });
            this.state.croppieobject.bind({
                url: reader.result,
                orientation: 4
            });
            console.log(file)
            console.log(reader.result)
        };
        reader.readAsDataURL(file);
        this.setState({
            profilepicture: reader.result
        });

    }

    componentDidMount() {
        var el = document.getElementById("upload-demo");
        var croppie;
        this.setState({
            croppieobject: (croppie = new Croppie(el, {
                enableExif: true,
                boundary: { width: 250, height: 250 },
                viewport: { width: 200, height: 200, type: "circle" },
                enforceBoundary: true,
                showZoomer: true,
                enableOrientation: false
            }))
        });
        if (Object.entries(this.state.profilepicture).length === 0) {
            croppie.bind({
                url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Philips_PM5544.svg",
                orientation: 4
            });
        } else {
            croppie.bind({
                url: this.state.profilepicture,
                orientation: 4
            });
        }
    }

    render() {
        return (
            <TabPane tabId="iconTabs1">
                <Form
                    role="form"
                    onSubmit={e => {
                        this.props.handleProfileSubmit(e, this.state);
                    }}
                >
                    <h2>Wijzig je profiel</h2>
                    <br />
                    <Row>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Naam</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.name}
                                    onChange={this.handleName}
                                    placeholder="Stationsplein 1"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Email</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.email}
                                    onChange={this.handleEmail}
                                    placeholder="0612345678"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Geboortedatum</p>
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
                                        defaultValue={moment(this.props.profileData.birthdate)}
                                    />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Stad</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.city}
                                    onChange={this.handleCity}
                                    placeholder="Amsterdam"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Adres</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.address}
                                    onChange={this.handleAddress}
                                    placeholder="Stationsplein 1"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Telefoonnummer</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.phonenumber}
                                    onChange={this.handlePhonenumber}
                                    placeholder="0612345678"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3" sm="6">
                            <p className="lead my-0">Profielfoto</p>
                        </Col>
                        <Col lg="3" sm="6">
                            <FormGroup>
                                <div className="custom-file">
                                    <input
                                        onChange={e => {
                                            this.handlePictureUpload(e);
                                        }}
                                        type="file"
                                        className="custom-file-input"
                                        id="customFileLangHTML"
                                    />
                                    <label
                                        className="custom-file-label"
                                        htmlFor="customFileLangHTML"
                                        data-browse="Bestand kiezen"
                                    >
                                        Voeg toe
                  </label>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-center" lg="12">
                            <div
                                id="upload-demo"
                                className="pt-4"
                                style={{ widht: 300, height: 300 }}
                            ></div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <h2>Vertel wat over jezelf!</h2>
                    <br />
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input
                                    defaultValue={this.props.profileData.description}
                                    style={{ resize: "none" }}
                                    onChange={this.handleDescription}
                                    placeholder="I am awesome!"
                                    type="textarea"
                                    rows="5"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <br />
                    <h2>Welke diensten bied je aan?</h2>
                    <br />
                    <Row>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.cleaning ? (
                                    <input
                                        className="custom-control-input"
                                        id="cleaning"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleCleaning}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="cleaning"
                                            type="checkbox"
                                            onChange={this.handleCleaning}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="cleaning">
                                    <span>Schoonmaken</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.cat ? (
                                    <input
                                        className="custom-control-input"
                                        id="cat"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleCat}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="cat"
                                            type="checkbox"
                                            onChange={this.handleCat}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="cat">
                                    <span>Katoppas</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.dog ? (
                                    <input
                                        className="custom-control-input"
                                        id="dog"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleDog}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="dog"
                                            type="checkbox"
                                            onChange={this.handleDog}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="dog">
                                    <span>Hondenuitlaat</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.baby ? (
                                    <input
                                        className="custom-control-input"
                                        id="baby"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleBaby}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="baby"
                                            type="checkbox"
                                            onChange={this.handleBaby}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="baby">
                                    <span>Babysitter</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.tutor ? (
                                    <input
                                        className="custom-control-input"
                                        id="tutor"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleTutor}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="tutor"
                                            type="checkbox"
                                            onChange={this.handleTutor}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="tutor">
                                    <span>Bijles</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.handy ? (
                                    <input
                                        className="custom-control-input"
                                        id="handy"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleHandy}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="handy"
                                            type="checkbox"
                                            onChange={this.handleHandy}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="handy">
                                    <span>Klusjes</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.it ? (
                                    <input
                                        className="custom-control-input"
                                        id="it"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleIt}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="it"
                                            type="checkbox"
                                            onChange={this.handleIt}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="it">
                                    <span>IT hulp</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.garden ? (
                                    <input
                                        className="custom-control-input"
                                        id="garden"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleGarden}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="garden"
                                            type="checkbox"
                                            onChange={this.handleGarden}
                                        />
                                    )}
                                <label className="custom-control-label" htmlFor="garden">
                                    <span>Tuinieren</span>
                                </label>
                            </div>
                        </Col>
                        <Col lg="3" sm="6">
                            <div className="custom-control custom-checkbox mb-3">
                                {this.state.services.music ? (
                                    <input
                                        className="custom-control-input"
                                        id="music"
                                        type="checkbox"
                                        defaultChecked="true"
                                        onChange={this.handleMusic}
                                    />
                                ) : (
                                        <input
                                            className="custom-control-input"
                                            id="music"
                                            type="checkbox"
                                            onChange={this.handleMusic}
                                        />
                                    )}
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
            </TabPane>
        );
    }
}

export default EditProfile;
