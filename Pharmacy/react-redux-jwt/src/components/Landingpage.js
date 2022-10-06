import React from "react";
//import Footer from "./Footer";
import Navbar from "./Navbar";
//import Navbar_beforelogin from "./Navbar_beforelogin";
import "./home.css";


const Landingpage = () => {
  return (
    <div>
      <main class="flex">
          <article class="padding_2x">
            <h1 class="title big"> Welcome to XYZPharmacy</h1>
          </article>
        </main>

        {/* <hr class="my-5" /> */}
        <div class="container">
          <section>
            <div class="row">
              <div class="col-md-5 gx-5 mb-4">
                <div
                  class=" hover-overlay ripple shadow-2-strong rounded-5"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://www.riteaid.com/shop/media/catalog/product/a/u/aubut1eynvqq7ndtbtqt.jpg?quality=80&bg-color=255,255,255&height=1500&width=1500&canvas=1500:1500"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ background: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
              </div>

              <div class="col-md-6 gx-5 mb-4">
                <h4>
                  <strong>Learn More About Our Pharmacists</strong>
                </h4>
                <p class="text-muted">
                  Rite Aid pharmacists are unique because they understand the
                  importance of personalized care. On top of receiving a
                  comprehensive education needed to meet state licensing
                  requirements, all our pharmacists are professionally certified
                  to provide immunizations. What sets our pharmacists apart from
                  the rest are their daily interactions with you, our customers.
                  Because at Rite Aid, we care.
                </p>
                <p>
                  <strong>DManage Prescriptions</strong>
                </p>
                <p class="text-muted">
                  Order refills right from your account, plus view and manage
                  your detailed prescription history. For access to additional
                  services, such as talking prescription caps, large font
                  labels, or Braille embossing, please contact your local
                  pharmacy.
                </p>
              </div>
            </div>
          </section>

          {/* <hr class="my-5" /> */}

          <section class="text-center">
            <h4 class="mb-5">
              <strong><u>Shop By Category</u></strong>
            </h4>

            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card">
                  <div
                    class=" hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://www.riteaid.com/shop/media/catalog/product/a/u/aubut1eynvqq7ndtbtqt.jpg? quality=80&bg-color=255,255,255&height=1500&width=1500&canvas=1500:1500"
                      class="img-fluid"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                        style={{ background: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Flowflex COVID -19 Antigen Home Test
                    </h5>
                    <p class="card-text">
                      Flowflex COVID-19 Home Test, FDA authorized Antigen test
                      that requires only 1 test, results in 15 minutes, Nasal
                      Swab.
                    </p>
                    <a href="#!" class="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div
                    class=" hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://www.riteaid.com/shop/media/catalog/product/m/g/mg3m8smct7td5hhr9o2c.jpg?quality=80&bg-color=255,255,255&height=1500&width=1500&canvas=1500:1500"
                      class="img-fluid"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                        style={{ background: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Zyrtec 24 Hour Allergy Relief Tablets - 10mg, 90 ct
                    </h5>
                    <p class="card-text">
                      Zyrtec Allergy Tablets relieves your worst allergy
                      symptoms, indoor and out. With 10 milligrams of cetirizine
                      hydrochloride per tablet, this prescription-strength
                      allergy relief medicine provides 24 hours of relief from
                      common symptom
                    </p>
                    <a href="#!" class="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div
                    class="hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://www.riteaid.com/shop/media/catalog/product/s/f/sfoejbuv0lwnkwdswvhs.jpg?quality=80&bg-color=255,255,255&height=1500&width=1500&canvas=1500:1500"
                      class="img-fluid"
                    />
                    <a href="#!">
                      <div
                        class="mask"
                        style={{ background: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">ChoiceMMed Pulse Oximeter</h5>
                    <p class="card-text">
                      ever second guess your pulse rate or blood oxygen level
                      again with ChoiceMmed Pulse Oximeter. Simply slip your
                      finger inside the advanced meter to quickly obtain an
                      accurate reading.
                    </p>
                    <a href="#!" class="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <hr class="my-5" /> */}
        </div>
        {/* <Footer /> */}
      </div>
    ///</div>
  );
};

export default Landingpage;
