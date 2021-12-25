import { useState } from 'react';
import numberToWord from "number-to-words";

const CookieBanner = (props) => {
    const { cookieData } = props
    const [isCustomize, setIsCustomize] = useState(false);
    const [accordianceClass, setAccordianceClass] = useState("");
    const [accordianId, setAccordiancId] = useState("")
    const [isOpen, setIsOpen] = useState(true);


    const customizeHandler = () => {
        setIsCustomize(!isCustomize)
    }



    const showAccordian = (idx, id) => {
        const numWord = numberToWord.toWords(idx + 1)
        const numWord2 = numWord.charAt(0).toUpperCase() + numWord.slice(1);
        setAccordiancId(id)
        setAccordianceClass(numWord2)
    }

    return (
        <>
            { isOpen &&
                <div className="mycard">
                    <div className="card auth-card">
                        <div className="firstWrapper">
                            <div className="text-right" id="close-btn">
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsOpen(!isOpen)}></button>
                            </div>
                            <h2 className="login-header">Can we store cookies?</h2>
                            <p>We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalize ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content.</p>
                            <p>Click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site.</p>
                            <p>You can familiarize with our <b><u id="privacyPolicy">Privacy Policy</u></b></p>
                            <div className="btn-section">
                                <div className="btn-sec1">
                                    <button type="button" className="btn btn-success" id="accept-btn">Accept All</button>
                                    <button type="button" className="btn btn-light" id="saveSetting-btn">Save Settings</button>
                                </div>
                                <div className="btn-sec2">
                                    <span className="nav-link dropdown-toggle" id="navbarDropdown" onClick={() => customizeHandler()}>
                                        Customize
                                    </span>
                                </div>
                            </div>
                        </div>
                        {isCustomize && cookieData.accordian ?
                            <div className="customizeSection">
                                <div className="secondWrapper">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        {cookieData.accordian.map((item, idx) => {
                                            return (

                                                <div className="accordion-item" key={idx}>
                                                    <h2 className="accordion-header" id={accordianId == item.CategoyId && `panelsStayOpen-heading${accordianceClass}`} onClick={() => showAccordian(idx, item.CategoyId)
                                                    }>
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={accordianId == item.CategoyId && `#panelsStayOpen-collapse${accordianceClass}`} aria-expanded="true" aria-controls={accordianId == item.CategoyId && `panelsStayOpen-collapse${accordianceClass}`}>
                                                            <span>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                                    <b className="accordanceTitle">{item.CategoyHeading}</b>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id={accordianId == item.CategoyId && `panelsStayOpen-collapse${accordianceClass}`} className="accordion-collapse collapse" aria-labelledby={accordianId == item.CategoyId && `panelsStayOpen-heading${accordianceClass}`}>
                                                        <div className="accordion-body">
                                                            <p>{item.CategoyText}</p>
                                                            <div className="accordian-sec2">
                                                                <div className="accordian-sec2a">
                                                                    <b>Plugins</b>
                                                                    <b>Block/Enable</b>
                                                                </div>
                                                                {item.PluginList.map((plugin,idx) => {
                                                                    return(
                                                                        <div className="accordian-sec2b" key={idx}>
                                                                            <span className="pluginTitleWrapper">{plugin.ComplianceType}</span>
                                                                            <div className="toggleIconWrapper">
                                                                            <div className="form-check form-switch">
                                                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                                            </div>
                                                                            </div>
                                                                            <a href='http://localhost:3000'>Go to site</a>
                                                                        </div>
                                                                    )
                                                                })}
                                                                
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div> : null}
                    </div>
                </div>
            }

        </>
    )
}


export default CookieBanner;