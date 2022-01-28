class AppointmentBooking extends component {
  constructor() {
    super();
    this.state = {
      booking_type: "",
      booking_time: "",
      location: "",
      date: "",
      status: "",
    };
  }
  onChangeBookingType = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div>
        <div onChange={this.onChangeBookingType}>
          <label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </label>
        </div>
      </div>
    );
  }
}
