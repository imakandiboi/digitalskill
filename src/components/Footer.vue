
<template>
  <div>
    <div class="container-fluid footer-section">
      <div class="container-fluid footer text-light">
        <div class="row">
          <div class="col-md-5 px-8">
            <div class="flex-col">
              <h2>About Digital Marketing Skill Institute</h2>
              <div>
                <p>
                  We are a global digital marketing training company that set<br />
                  the standard in the digital marketing industry through<br />
                  our comprehensive 90% practical and 10% theoretical Digital<br />
                  Marketing Certification Course with during and
                  after-training<br />
                  support from experienced digital marketing experts.
                </p>
              </div>
              <div class="icons">
                <h4>Social Links</h4>
                <h6>find more about us on our social links below :</h6>
                <div class="d-flex flex-row icon-wrap">
                  <div><i class="fab fa-facebook-square"></i></div>
                  <div><i class="fab fa-youtube"></i></div>
                  <div><i class="fab fa-linkedin"></i></div>
                  <div><i class="fab fa-twitter-square"></i></div>
                  <div><i class="fab fa-instagram"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="flex-col">
              <h2>Our Global Office Locations</h2>
              <p>
                <strong class="location">USA Office:</strong> Digital Marketing
                Skill LLC. 201 East 5th St. STE 1200 Sheridan, WY 82801
              </p>
              <p>
                <strong class="location">Nigeria Office:</strong>
                DigitalMarketingSkill Institute Services Limited. 72B Surulere
                Way, Dolphin Estate, 101222, Ikoyi, Lagos, Nigeria.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <h2>Sign up for newsletters:</h2>
            <div class="mb-3 mt-8" style="margin-top: 24px">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Johndoe@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Feedbacks</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-warning" type="button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="underline"></div>
    <div class="container-fluid notice-section">
      <div class="container">
        <p>
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <br />
        <p>
          <strong> IMPORTANT:</strong>
          Earnings Disclaimer Listen, there is no such thing as “easy or fast
          money”. In fact, if you believe that or are looking for some
          “overnight millions”, our programs are not for you. We hate this
          approach to marketing, career and business growth. We believe in
          time-tested, proven marketing methods combined with powerful teaching
          and lots of hard work. The income claims or results or examples you
          see on this site are some of the students who have taken what we teach
          and implemented it in their own business or career. We by no means
          promise or guarantee that you will get the exact same results as they
          have, your results may be higher or lower but most importantly, you
          only stand a chance of achieving some level of success if you
          implement. In fact, as stipulated by law, we can not and do not make
          any guarantees about your ability to get results or earn any money
          with our ideas, information, tools or strategies. Your results will be
          based on many variables, such as your level of effort, business
          acumen, personal qualities, knowledge, skills, time you commit to
          applying the course lessons and a host of other factors. Since these
          factors differ for each individual, we cannot guarantee your success,
          results, or income level, nor are we responsible for your success or
          failure. We just want to help you by giving great content, direction
          and strategies that worked well for us and our students and that we
          believe can move you forward. Digital Marketing Skill Institute is not
          an accredited university and we don’t confer traditional degrees.
        </p>
        <br />
        <p>
          <strong>Affiliate Income:</strong>
          Some of the links on our website, which means that if you choose to
          make a purchase, we will earn a commission. This commission comes at
          no additional cost to you. Please understand that we recommend them
          because they are helpful and useful, not because of the small
          commissions we will make if you decide to buy something. Please do not
          spend any money on these products unless you feel you need them or
          that they will help you achieve your goals. Intellectual Property
          Rights As an attendee of our course or programs you (and/or your
          employer) shall not obtain any right to the course materials. These
          materials may also not be shared in any way. If any course content
          would be shared, we may deny you further access to the course and/or
          the online learning environment. It is strictly forbidden to use any
          of our content (slides, reading list, exercises) for commercial
          digital marketing training/services/workshops, whether during the
          course or thereafter.. If you violate our intellectual property
          rights, you will pay us a penalty of $25,000 per violation, plus an
          additional $1,500 for each day that the violation continues. This
          penalty shall apply in addition to a claim for damages and may not be
          mitigated by a court. All of our terms, privacy policies, return
          policy and disclaimers for this program and website can be accessed
          via the link below. We feel transparency is important and we hold
          ourselves (and you) to a high standard of integrity. Thanks for
          stopping by. We hope this training and content brings you a lot of
          value.
        </p>
        <br />
        <p>
          Privacy Policy and Term of Use | Training Terms and Conditions |
          Earnings Disclaimer | Refund Policy | GDPR Policy | Intellectual
          Property Rights | Contact Us
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Open+Sans&family=Poppins&family=Raleway&family=Roboto&family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Open+Sans&family=Raleway&family=Roboto&display=swap");
.footer-section {
  padding: 50px 30px;
  background-color: rgb(58, 117, 206);
  height: 55vh;
  padding-bottom: 20px;
}
.footer {
  padding: 0 20px;
}
footer h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
}
footer p {
  padding: 30px 0;
  font-family: "Poppins", sans-serif;
}
/**ICONS */

.icon-wrap {
  display: inline-block;
  gap: 2rem;
}
.icon h6 {
  padding: 20px 0;
}
.icon-wrap .fab {
  padding: 20px 0;
  font-size: 30px;
}
p .location {
  font-weight: 900;
}
.underline {
  width: 100%;
  height: 1px;
  color: #ffffff;
}
.notice-section {
  color: #a6d3fa;
  background-color: rgb(58, 117, 206);
  height: auto;
}
@media only screen and (max-width: 900px) {
  .footer-section {
    padding: 10px 0;
    background-color: rgb(58, 117, 206);
    height: auto;
  }
}
</style>