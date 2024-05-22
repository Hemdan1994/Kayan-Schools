import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

const options = [
  { value: "Pre-KG ", label: "Pre-KG" },
  { value: "KG-1", label: "KG-1" },
  { value: "KG-2", label: "KG-2" },
  { value: "Grade 1", label: "Grade 1" },
  { value: "Grade 2", label: "Grade 2" },
  { value: "Grade 3", label: "Grade 3" },
  { value: "Grade 4", label: "Grade 4" },
  { value: "Grade 5", label: "Grade 5" },
  { value: "Grade 6", label: "Grade 6" },
  { value: "Grade 7", label: "Grade 7" },
  { value: "Grade 8", label: "Grade 8" },
  { value: "Grade 9", label: "Grade 9" },
];

const nationalitiesOptions = [
  { value: "Afghan", label: "Afghan" },
  { value: "Albanian", label: "Albanian" },
  { value: "Algerian", label: "Algerian" },
  { value: "American", label: "American" },
  { value: "Andorran", label: "Andorran" },
  { value: "Angolan", label: "Angolan" },
  { value: "Antiguans", label: "Antiguans" },
  { value: "Argentinean", label: "Argentinean" },
  { value: "Armenian", label: "Armenian" },
  { value: "Australian", label: "Australian" },
  { value: "Austrian", label: "Austrian" },
  { value: "Azerbaijani", label: "Azerbaijani" },
  { value: "Bahamian", label: "Bahamian" },
  { value: "Bahraini", label: "Bahraini" },
  { value: "Bangladeshi", label: "Bangladeshi" },
  { value: "Barbadian", label: "Barbadian" },
  { value: "Barbudans", label: "Barbudans" },
  { value: "Batswana", label: "Batswana" },
  { value: "Belarusian", label: "Belarusian" },
  { value: "Belgian", label: "Belgian" },
  { value: "Belizean", label: "Belizean" },
  { value: "Beninese", label: "Beninese" },
  { value: "Bhutanese", label: "Bhutanese" },
  { value: "Bolivian", label: "Bolivian" },
  { value: "Bosnian", label: "Bosnian" },
  { value: "Brazilian", label: "Brazilian" },
  { value: "British", label: "British" },
  { value: "Bruneian", label: "Bruneian" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Burkinabe", label: "Burkinabe" },
  { value: "Burmese", label: "Burmese" },
  { value: "Burundian", label: "Burundian" },
  { value: "Cambodian", label: "Cambodian" },
  { value: "Cameroonian", label: "Cameroonian" },
  { value: "Canadian", label: "Canadian" },
  { value: "Cape Verdean", label: "Cape Verdean" },
  { value: "Central African", label: "Central African" },
  { value: "Chadian", label: "Chadian" },
  { value: "Chilean", label: "Chilean" },
  { value: "Chinese", label: "Chinese" },
  { value: "Colombian", label: "Colombian" },
  { value: "Comoran", label: "Comoran" },
  { value: "Congolese", label: "Congolese" },
  { value: "Costa Rican", label: "Costa Rican" },
  { value: "Croatian", label: "Croatian" },
  { value: "Cuban", label: "Cuban" },
  { value: "Cypriot", label: "Cypriot" },
  { value: "Czech", label: "Czech" },
  { value: "Danish", label: "Danish" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominican", label: "Dominican" },
  { value: "Dutch", label: "Dutch" },
  { value: "East Timorese", label: "East Timorese" },
  { value: "Ecuadorean", label: "Ecuadorean" },
  { value: "Egyptian", label: "Egyptian" },
  { value: "Emirian", label: "Emirian" },
  { value: "Equatorial Guinean", label: "Equatorial Guinean" },
  { value: "Eritrean", label: "Eritrean" },
  { value: "Estonian", label: "Estonian" },
  { value: "Ethiopian", label: "Ethiopian" },
  { value: "Fijian", label: "Fijian" },
  { value: "Filipino", label: "Filipino" },
  { value: "Finnish", label: "Finnish" },
  { value: "French", label: "French" },
  { value: "Gabonese", label: "Gabonese" },
  { value: "Gambian", label: "Gambian" },
  { value: "Georgian", label: "Georgian" },
  { value: "German", label: "German" },
  { value: "Ghanaian", label: "Ghanaian" },
  { value: "Greek", label: "Greek" },
  { value: "Grenadian", label: "Grenadian" },
  { value: "Guatemalan", label: "Guatemalan" },
  { value: "Guinea-Bissauan", label: "Guinea-Bissauan" },
  { value: "Guinean", label: "Guinean" },
  { value: "Guyanese", label: "Guyanese" },
  { value: "Haitian", label: "Haitian" },
  { value: "Herzegovinian", label: "Herzegovinian" },
  { value: "Honduran", label: "Honduran" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "I-Kiribati", label: "I-Kiribati" },
  { value: "Icelander", label: "Icelander" },
  { value: "Indian", label: "Indian" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Iranian", label: "Iranian" },
  { value: "Iraqi", label: "Iraqi" },
  { value: "Irish", label: "Irish" },
  { value: "Israeli", label: "Israeli" },
  { value: "Italian", label: "Italian" },
  { value: "Ivorian", label: "Ivorian" },
  { value: "Jamaican", label: "Jamaican" },
  { value: "Japanese", label: "Japanese" },
  { value: "Jordanian", label: "Jordanian" },
  { value: "Kazakhstani", label: "Kazakhstani" },
  { value: "Kenyan", label: "Kenyan" },
  { value: "Kittian and Nevisian", label: "Kittian and Nevisian" },
  { value: "Kuwaiti", label: "Kuwaiti" },
  { value: "Kyrgyz", label: "Kyrgyz" },
  { value: "Laotian", label: "Laotian" },
  { value: "Latvian", label: "Latvian" },
  { value: "Lebanese", label: "Lebanese" },
  { value: "Liberian", label: "Liberian" },
  { value: "Libyan", label: "Libyan" },
  { value: "Liechtensteiner", label: "Liechtensteiner" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Luxembourger", label: "Luxembourger" },
  { value: "Macedonian", label: "Macedonian" },
  { value: "Malagasy", label: "Malagasy" },
  { value: "Malawian", label: "Malawian" },
  { value: "Malaysian", label: "Malaysian" },
  { value: "Maldivan", label: "Maldivan" },
  { value: "Malian", label: "Malian" },
  { value: "Maltese", label: "Maltese" },
  { value: "Marshallese", label: "Marshallese" },
  { value: "Mauritanian", label: "Mauritanian" },
  { value: "Mauritian", label: "Mauritian" },
  { value: "Mexican", label: "Mexican" },
  { value: "Micronesian", label: "Micronesian" },
  { value: "Moldovan", label: "Moldovan" },
  { value: "Monacan", label: "Monacan" },
  { value: "Mongolian", label: "Mongolian" },
  { value: "Moroccan", label: "Moroccan" },
  { value: "Mosotho", label: "Mosotho" },
  { value: "Motswana", label: "Motswana" },
  { value: "Mozambican", label: "Mozambican" },
  { value: "Namibian", label: "Namibian" },
  { value: "Nauruan", label: "Nauruan" },
  { value: "Nepalese", label: "Nepalese" },
  { value: "New Zealander", label: "New Zealander" },
  { value: "Nicaraguan", label: "Nicaraguan" },
  { value: "Nigerian", label: "Nigerian" },
  { value: "Nigerien", label: "Nigerien" },
  { value: "North Korean", label: "North Korean" },
  { value: "Northern Irish", label: "Northern Irish" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Omani", label: "Omani" },
  { value: "Pakistani", label: "Pakistani" },
  { value: "Palauan", label: "Palauan" },
  { value: "Panamanian", label: "Panamanian" },
  { value: "Papua New Guinean", label: "Papua New Guinean" },
  { value: "Paraguayan", label: "Paraguayan" },
  { value: "Peruvian", label: "Peruvian" },
  { value: "Polish", label: "Polish" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Qatari", label: "Qatari" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" },
  { value: "Rwandan", label: "Rwandan" },
  { value: "Saint Lucian", label: "Saint Lucian" },
  { value: "Salvadoran", label: "Salvadoran" },
  { value: "Samoan", label: "Samoan" },
  { value: "San Marinese", label: "San Marinese" },
  { value: "Sao Tomean", label: "Sao Tomean" },
  { value: "Saudi", label: "Saudi" },
  { value: "Scottish", label: "Scottish" },
  { value: "Senegalese", label: "Senegalese" },
  { value: "Serbian", label: "Serbian" },
  { value: "Seychellois", label: "Seychellois" },
  { value: "Sierra Leonean", label: "Sierra Leonean" },
  { value: "Singaporean", label: "Singaporean" },
  { value: "Slovakian", label: "Slovakian" },
  { value: "Slovenian", label: "Slovenian" },
  { value: "Solomon Islander", label: "Solomon Islander" },
  { value: "Somali", label: "Somali" },
  { value: "South African", label: "South African" },
  { value: "South Korean", label: "South Korean" },
  { value: "Spanish", label: "Spanish" },
  { value: "Sri Lankan", label: "Sri Lankan" },
  { value: "Sudanese", label: "Sudanese" },
  { value: "Surinamer", label: "Surinamer" },
  { value: "Swazi", label: "Swazi" },
  { value: "Swedish", label: "Swedish" },
  { value: "Swiss", label: "Swiss" },
  { value: "Syrian", label: "Syrian" },
  { value: "Taiwanese", label: "Taiwanese" },
  { value: "Tajik", label: "Tajik" },
  { value: "Tanzanian", label: "Tanzanian" },
  { value: "Thai", label: "Thai" },
  { value: "Togolese", label: "Togolese" },
  { value: "Tongan", label: "Tongan" },
  { value: "Trinidadian or Tobagonian", label: "Trinidadian or Tobagonian" },
  { value: "Tunisian", label: "Tunisian" },
  { value: "Turkish", label: "Turkish" },
  { value: "Tuvaluan", label: "Tuvaluan" },
  { value: "Ugandan", label: "Ugandan" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Uruguayan", label: "Uruguayan" },
  { value: "Uzbekistani", label: "Uzbekistani" },
  { value: "Venezuelan", label: "Venezuelan" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Welsh", label: "Welsh" },
  { value: "Yemenite", label: "Yemenite" },
  { value: "Zambian", label: "Zambian" },
  { value: "Zimbabwean", label: "Zimbabwean" },
];

const reliogionOptions = [
  { value: "Buddhism", label: "Buddhism" },
  { value: "Christianity", label: "Christianity" },
  { value: "Hinduism", label: "Hinduism" },
  { value: "Islam", label: "Islam" },
  { value: "Jainism", label: "Jainism" },
  { value: "Judaism", label: "Judaism" },
  { value: "Shinto", label: "Shinto" },
  { value: "Sikhism", label: "Sikhism" },
  { value: "Taoism", label: "Taoism" },
  { value: "Zoroastrianism", label: "Zoroastrianism" },
  { value: "Bahá'í Faith", label: "Bahá'í Faith" },
  { value: "Cao Dai", label: "Cao Dai" },
  { value: "Cheondoism", label: "Cheondoism" },
  { value: "Druze", label: "Druze" },
  { value: "Falun Gong", label: "Falun Gong" },
  { value: "Juche", label: "Juche" },
  { value: "Rastafari", label: "Rastafari" },
  { value: "Tenrikyo", label: "Tenrikyo" },
  { value: "Wicca", label: "Wicca" },
  { value: "Yazidism", label: "Yazidism" },
  { value: "Agnosticism", label: "Agnosticism" },
  { value: "Atheism", label: "Atheism" },
  { value: "Humanism", label: "Humanism" },
  { value: "Secularism", label: "Secularism" },
];

const languages = [
  { value: "Afrikaans", label: "Afrikaans" },
  { value: "Albanian", label: "Albanian" },
  { value: "Amharic", label: "Amharic" },
  { value: "Arabic", label: "Arabic" },
  { value: "Armenian", label: "Armenian" },
  { value: "Azerbaijani", label: "Azerbaijani" },
  { value: "Basque", label: "Basque" },
  { value: "Belarusian", label: "Belarusian" },
  { value: "Bengali", label: "Bengali" },
  { value: "Bosnian", label: "Bosnian" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Catalan", label: "Catalan" },
  { value: "Cebuano", label: "Cebuano" },
  { value: "Chichewa", label: "Chichewa" },
  { value: "Chinese", label: "Chinese" },
  { value: "Corsican", label: "Corsican" },
  { value: "Croatian", label: "Croatian" },
  { value: "Czech", label: "Czech" },
  { value: "Danish", label: "Danish" },
  { value: "Dutch", label: "Dutch" },
  { value: "English", label: "English" },
  { value: "Esperanto", label: "Esperanto" },
  { value: "Estonian", label: "Estonian" },
  { value: "Filipino", label: "Filipino" },
  { value: "Finnish", label: "Finnish" },
  { value: "French", label: "French" },
  { value: "Galician", label: "Galician" },
  { value: "Georgian", label: "Georgian" },
  { value: "German", label: "German" },
  { value: "Greek", label: "Greek" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Haitian Creole", label: "Haitian Creole" },
  { value: "Hausa", label: "Hausa" },
  { value: "Hawaiian", label: "Hawaiian" },
  { value: "Hebrew", label: "Hebrew" },
  { value: "Hindi", label: "Hindi" },
  { value: "Hmong", label: "Hmong" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Icelandic", label: "Icelandic" },
  { value: "Igbo", label: "Igbo" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Irish", label: "Irish" },
  { value: "Italian", label: "Italian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Javanese", label: "Javanese" },
  { value: "Kannada", label: "Kannada" },
  { value: "Kazakh", label: "Kazakh" },
  { value: "Khmer", label: "Khmer" },
  { value: "Korean", label: "Korean" },
  { value: "Kurdish (Kurmanji)", label: "Kurdish (Kurmanji)" },
  { value: "Kyrgyz", label: "Kyrgyz" },
  { value: "Lao", label: "Lao" },
  { value: "Latin", label: "Latin" },
  { value: "Latvian", label: "Latvian" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Luxembourgish", label: "Luxembourgish" },
  { value: "Macedonian", label: "Macedonian" },
  { value: "Malagasy", label: "Malagasy" },
  { value: "Malay", label: "Malay" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Maltese", label: "Maltese" },
  { value: "Maori", label: "Maori" },
  { value: "Marathi", label: "Marathi" },
  { value: "Mongolian", label: "Mongolian" },
  { value: "Myanmar (Burmese)", label: "Myanmar (Burmese)" },
  { value: "Nepali", label: "Nepali" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Pashto", label: "Pashto" },
  { value: "Persian", label: "Persian" },
  { value: "Polish", label: "Polish" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" },
  { value: "Samoan", label: "Samoan" },
  { value: "Scots Gaelic", label: "Scots Gaelic" },
  { value: "Serbian", label: "Serbian" },
  { value: "Sesotho", label: "Sesotho" },
  { value: "Shona", label: "Shona" },
  { value: "Sindhi", label: "Sindhi" },
  { value: "Sinhala", label: "Sinhala" },
  { value: "Slovak", label: "Slovak" },
  { value: "Slovenian", label: "Slovenian" },
  { value: "Somali", label: "Somali" },
  { value: "Spanish", label: "Spanish" },
  { value: "Sundanese", label: "Sundanese" },
  { value: "Swahili", label: "Swahili" },
  { value: "Swedish", label: "Swedish" },
  { value: "Tajik", label: "Tajik" },
  { value: "Tamil", label: "Tamil" },
  { value: "Telugu", label: "Telugu" },
  { value: "Thai", label: "Thai" },
  { value: "Turkish", label: "Turkish" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Urdu", label: "Urdu" },
  { value: "Uzbek", label: "Uzbek" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Welsh", label: "Welsh" },
  { value: "Xhosa", label: "Xhosa" },
  { value: "Yiddish", label: "Yiddish" },
  { value: "Yoruba", label: "Yoruba" },
  { value: "Zulu", label: "Zulu" },
];

const degrees = [
   { value: "Associate of Arts", label: "Associate of Arts" },
   { value: "Associate of Science", label: "Associate of Science" },
   { value: "Bachelor of Arts", label: "Bachelor of Arts" },
   { value: "Bachelor of Science", label: "Bachelor of Science" },
   { value: "Bachelor of Fine Arts", label: "Bachelor of Fine Arts" },
   { value: "Bachelor of Business Administration", label: "Bachelor of Business Administration" },
   { value: "Bachelor of Engineering", label: "Bachelor of Engineering" },
   { value: "Bachelor of Technology", label: "Bachelor of Technology" },
   { value: "Bachelor of Education", label: "Bachelor of Education" },
   { value: "Bachelor of Laws", label: "Bachelor of Laws" },
   { value: "Master of Arts", label: "Master of Arts" },
   { value: "Master of Science", label: "Master of Science" },
   { value: "Master of Fine Arts", label: "Master of Fine Arts" },
   { value: "Master of Business Administration", label: "Master of Business Administration" },
   { value: "Master of Engineering", label: "Master of Engineering" },
   { value: "Master of Technology", label: "Master of Technology" },
   { value: "Master of Education", label: "Master of Education" },
   { value: "Master of Laws", label: "Master of Laws" },
   { value: "Doctor of Philosophy", label: "Doctor of Philosophy" },
   { value: "Doctor of Medicine", label: "Doctor of Medicine" },
   { value: "Doctor of Dental Surgery", label: "Doctor of Dental Surgery" },
   { value: "Doctor of Education", label: "Doctor of Education" },
   { value: "Doctor of Business Administration", label: "Doctor of Business Administration" },
   { value: "Doctor of Engineering", label: "Doctor of Engineering" },
   { value: "Doctor of Technology", label: "Doctor of Technology" },
   { value: "Doctor of Law", label: "Doctor of Law" }
 ];
 

const StepOne = () => {
  const [startDate, setStartDate] = useState(new Date("2024/05/08"));
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedreligion, setSelectedReligion] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedlanguage, setSelectedLanguage] = useState(null);
  const [selectedNationalitiesOption, setSelectedNationalitiesOption] =
    useState(null);

  return (
    <section>
      <div className="row">
        <h3 className="pb-4">Fill in an online application</h3>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">
                  Academic year<span className="required">*</span>
                </label>
                <select className="form-control" id="sel1">
                  <option>2024 - 2025</option>
                  <option>2025 - 2026</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Grade Level Applying To <span className="required">*</span>
            </label>
            <Select
              placeholder="Select Academic year"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
            />
          </div>
        </div>

        <h3 className="p-4 text-primary text-center text-decoration-underline">
          Student's Information
        </h3>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>

            <input
              type="text"
              name="firstName"
              className="input-group form-control"
              placeholder="Parsley"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label d-block">
              Date of Birth <span className="required">*</span>
            </label>
            <DatePicker
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              selected={startDate}
              className="form-control w-100 d-block"
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Nationality <span className="required">*</span>
            </label>
            <Select
              placeholder="Select Academic year"
              defaultValue={selectedNationalitiesOption}
              onChange={setSelectedNationalitiesOption}
              options={nationalitiesOptions}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Address <span className="required">*</span>
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Religions <span className="required">*</span>
            </label>
            <Select
              placeholder="Select Relegion"
              defaultValue={selectedreligion}
              onChange={setSelectedReligion}
              options={reliogionOptions}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Second Language /s<span className="required">*</span>
            </label>
            <Select
              placeholder="Select Second Language"
              defaultValue={selectedlanguage}
              onChange={setSelectedLanguage}
              options={languages}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
              isMulti
            />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="form-group mb-3">
            <label className="form-label">
              Gender <span className="required">*</span>
            </label>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">The previous school</label>
            <input
              type="text"
              name="previousSchool"
              className="form-control"
              placeholder="The Previous School"
            />
          </div>
        </div>

        <h3 className="p-4 text-primary text-center text-decoration-underline">
          Father's Information
        </h3>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Father's Academic Degree <span className="required">*</span>
            </label>
            <Select
              placeholder="Select Academic Degree"
              defaultValue={selectedDegree}
              onChange={setSelectedDegree}
              options={degrees}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Father's Job <span className="required">*</span>
            </label>

            <input
              type="text"
              name="fatherJob"
              className="input-group form-control"
              placeholder="Father's Job"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Father's Email <span className="required">*</span>
            </label>

            <input
              type="email"
              name="fatherEmail"
              className="input-group form-control"
              placeholder="Father's Email"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Father's Mobile Number <span className="required">*</span>
            </label>

            <input
              type="number"
              name="fatherNumber"
              className="input-group form-control"
              placeholder="Father's Mobile Number"
              required
            />
          </div>
        </div>




        <h3 className="p-4 text-primary text-center text-decoration-underline">
          Mother's Information
        </h3>

        <div className="col-lg-6 mb-2">
        <div className="form-group mb-3">
          <label className="form-label">
            Mother's Name <span className="required">*</span>
          </label>

          <input
            type="text"
            name="motherName"
            className="input-group form-control"
            placeholder="Mother's Name"
            required
          />
        </div>
      </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
              Mother's Academic Degree <span className="required">*</span>
            </label>
            <Select
              placeholder="Select Academic Degree"
              defaultValue={selectedDegree}
              onChange={setSelectedDegree}
              options={degrees}
              style={{
                lineHeight: "40px",
                color: "#7e7e7e",
                paddingLeft: " 15px",
              }}
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
            Mother's Job <span className="required">*</span>
            </label>

            <input
              type="text"
              name="motherJob"
              className="input-group form-control"
              placeholder="Mother's Job"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
            Mother's Email <span className="required">*</span>
            </label>

            <input
              type="email"
              name="motherEmail"
              className="input-group form-control"
              placeholder="Mother's Email"
              required
            />
          </div>
        </div>

        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">
            Mother's Mobile Number <span className="required">*</span>
            </label>

            <input
              type="number"
              name="motherNumber"
              className="input-group form-control"
              placeholder="Mother's Mobile Number"
              required
            />
          </div>
        </div>

     
        <div className="col-lg-12 mb-3">
          <div className="form-group mb-3">
            <label className="form-label">
              Where are you from <span className="required">*</span>
            </label>
            <input type="text" name="place" className="form-control" required />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
