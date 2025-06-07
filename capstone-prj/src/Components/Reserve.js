import "../Styles/Reserve.css";

function Reserve() {
  return (
    <section className="reserve-section">
      <div className="reserve-container">
        <h1>Reserve a Table</h1>
        <p>Fill out the form to reserve your table at Little Lemon!</p>
        <form className="reserve-form">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" required />

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" required>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      </div>
    </section>
  );
}

export { Reserve };
