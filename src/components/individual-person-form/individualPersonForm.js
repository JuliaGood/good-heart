import "./individualPersonForm.css";

function IndividualPersonForm (props) {
    const { firstname, lastname, companyname, email, phone, country, city, district, address, postcode } = props.inputs;
    const onInputChange = props.onInputChange;

    return (
      <div className="individual-person-form">

        <div className="person-information">
          <div className="form-two-column">
            <div className="form-element">
              <label htmlFor="firstname">Ім'я</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${firstname.valid !== null ? firstname.valid ? 'success' : 'error' : ''}`}
              />

              {/* if (firstname.valid !== null) {
                if (firstname.valid) {
                  return 'success';
                } else {
                  return 'error';
                }
              } else {
                return '';
              } */}

            </div>
            <div className="form-element">
              <label htmlFor="lastname">Фамілія</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${lastname.valid !== null ? lastname.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="form-element">
              <label htmlFor="companyname">Назва компанії, організації</label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                value={companyname.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${companyname.valid !== null ? companyname.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="form-element">
              <label htmlFor="email">Email-адреса</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email.value}
                autoComplete="off"
                onChange={onInputChange}
                className={` ${email.valid !== null ? email.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="form-element">
              <label htmlFor="phone">Номер телефону</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={phone.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${phone.valid !== null ? phone.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>
        </div>


        <div className="person-address">
          <div className="form-column">
            <div className="form-element">
              <label htmlFor="country">Країна</label>
              <input
                type="text"
                id="country"
                name="country"
                value={country.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${country.valid !== null ? country.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-two-column">
            <div className="form-element">
              <label htmlFor="city">Місто</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${city.valid !== null ? city.valid ? 'success' : 'error' : ''}`}
              />
            </div>
            <div className="form-element">
              <label htmlFor="district">Штат, район</label>
              <input
                type="text"
                id="district"
                name="district"
                value={district.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${district.valid !== null ? district.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-column">
            <div className="form-element">
              <label htmlFor="address">Aдреса</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${address.valid !== null ? address.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>

          <div className="form-column form-column-half">
            <div className="form-element">
              <label htmlFor="postcode">Поштовий індекс</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={postcode.value}
                autoComplete="off"
                onChange={onInputChange}
                className={`${postcode.valid !== null ? postcode.valid ? 'success' : 'error' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    )

}

export default IndividualPersonForm;
