
export default function HeroFooter() {
  return (
    <footer className="footer">
        <div className="col">
            <button className="book" role="button" type="button">Book a room</button>
        </div>
        <div className="col policies">
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
        </div>
        <div className="col">
            &copy; 2023 Neringa Vilnius
        </div>
    </footer>
  )
}