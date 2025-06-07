import "../Styles/Testimonials.css";
import { profile1,profile2,profile3 } from "../Assets/icons_assets";

function Testimonials() {
  const testimonials = [
    {
      name: "Sophia R.",
      photo: profile1,
      rating: 5,
      quote: "The food was absolutely amazing, and the service was impeccable. Highly recommend!",
    },
    {
      name: "Liam W.",
      photo: profile2,
      rating: 4,
      quote: "A hidden gem in Chicago. Their lemon dessert is a must-try!",
    },
    {
      name: "Olivia M.",
      photo: profile3,
      rating: 5,
      quote: "The ambiance, food, and staff were all wonderful. Will definitely return!",
    },

  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials__carousel">
        {testimonials.map((t, index) => (
          <div className="testimonial__card" key={index}>
            <img src={t.photo} alt={t.name} className="testimonial__photo" />
            <h3>{t.name}</h3>
            <div className="testimonial__rating">
              {"⭐".repeat(t.rating)}
            </div>
            <p className="testimonial__quote">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Testimonials };
