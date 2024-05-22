import Image from "next/image";

export default function Footer() {
  return (
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
        <div class="col mb-3">
          <Image
            src="/bookstore.png"
            alt="Book Store logo"
            width="100"
            height="100"
          />
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                How to order?
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Return policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Delivery conditions
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Privacy Policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                About us
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                General rules
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Privacy & Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
