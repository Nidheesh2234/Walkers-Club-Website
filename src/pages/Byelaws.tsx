import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Byelaws = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-4 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">

         {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
          aria-label="Go back"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >

        {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Walkers Club Visakhapatnam
            </h1>
            <p className="text-lg text-black">Bye-Laws</p>
          </div>

          {/* MAIN CONTENT */}
          <div className="space-y-6">

            {/* SECTION 1 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                SECTION - 1: Board Formation
              </h2>

              <p><strong>Section-1.1:</strong>The President shall, in the month of September,
            constitute a Committee whose purpose shall be to propose, keeping in
            view the provisions of the Constitution, a list of names for the incoming
            Board. The Committee shall comprise of the President, three Immediate
            Past Presidents, three Past Presidents, Secretary, and Vice President-1.</p>

              <p className="mt-3 font-semibold">While proposing the names of the persons for constituting the incoming
            board, the persons proposed shall have the following standing in the club:</p>

              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li><strong>a.</strong> For the office of the Vice President No. 2 — at least 3 years’
                standing in the club before his/her election as Vice President No. 2.</li>
                <li><strong>b.</strong> For the office of the Secretary — he/she should have at least 4
                years’ standing as a member of the club.</li>
                <li><strong>c.</strong> For the post of Members of the Board — he/she should have at
                least 1 year’s standing before election as a board member.</li>
                <li><strong>d.</strong> The total number of the board shall not exceed 3% of the
                total members of the club.</li>
              </ul>

              <p className="mt-3">
                <strong>Section-1.2:</strong>  It shall be the convention of the Club that the existing
            First and Second Vice presidents will automatically succeed as
            the President and the First Vice President respectively, for the
            succeeding year.
              </p>
              <p><strong>Section-1.3:</strong>  The Committee constituted vide section 1.1 shall,
 meet within a week, and propose name for each of the Office of
 the Second Vice President. Secretary, Treasure, Editor and
 stipulated number of members.</p>
              <p><strong>Section-1.4:</strong>  The names proposed by the Committee shall be
 circulated to all the Members of the club in the month of November
 for consideration at the General Body Meeting in December. The
 General Body shall have the option to either approve the names so proposed or it may nominate alternate name (s) from amongst
 the members of the Club present at the meeting, for approval.
 The approval must have the support of at least two - thirds of the
 members present at the meeting.</p>
              <p><strong>Section-1.5:</strong>   The term of office of the President, vice President,
 Office Bearers and the Directors shall be One year.</p>
              <p><strong>Section-1.6:</strong>  A vacancy occurring at any time during the year, for
 whatever cause, in the Board of Directors or any office, shall be
 filled up by nomination by the rest of the Board and the General
 Body informed thereafter.</p>
            </div>

            {/* SECTION 2 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 2: Governing Body</h2>
              <p>The Board of Directors shall be the Governing Body of the Club,
 vide Article-VIII, Section-1 of the Constitution.</p>
            </div>

            {/* SECTION 3 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 3: Duties of Office Bearers</h2>

              <p><strong>Section-3.1 - President:</strong> It shall be the duty of the President to
 serve as a member of the Board of Directors of the Club, to perform
 such other duties as may be prescribed by the General Body. The
 President presides over all the meetings of the Club. He shall be
 responsible for the efficient functioning of the club.</p>
              <p><strong>Section-3.2 - Vice Presidents:</strong>Vice Presidents shall assist the
 President in discharging his duties. It shall be the duty of one of
 the Vice Presidents to preside at meetings of the Club in the
 absence of the President and to perform such other duties as
 ordinary pertain to that office. In the absence of the President
 and Vice Presidents, the members present at a particular meeting
 shall select one amongst them to preside and conduct the
 proceedings.</p>
              <p><strong>Section-3.3 - Secretary:</strong>  It shall be the duty of the Secretary to
 maintain the Record of the membership, Record of Attendance at
 meetings, send out Notices of the meeting of the Club, of the Board,
 and its Committees, to record and preserve the minutes of such
 meetings; make the required Periodical Reports including Annual Report on the activities of the club during the year for presentation
 at the Annual General Board or the General Body. He shall perform
 such other duties pertaining to his office for the betterment of the
 club. He shall endeavor to augment the income of the club and
 workout schemes for enhancing its service activities. He shall be
 the custodian of the records and properties of the Club.</p>
              <p><strong>Section-3.4 - Treasurer:</strong>It shall be the duty of the President to
 serve as a member of the Board of Directors of the Club, to perform
 such other duties as may be prescribed by the General Body. The
 President presides over all the meetings of the Club. He shall be
 responsible for the efficient functioning of the club.It shall be the duty of the Treasurer to
 keeping safe custody of all he funds of the Club. Shall collect
 interest from deposits in Corpus Fund and maintain correct
 accounts of income & Expenditure. He shall present a Statement
 of the financial position of the Club at each Board Meeting and to
 the General Body once in a year. He shall present Statement of
 Accounts to the General Body in January, shall also prepare a
 Budget with the assistance of the president and Secretary and
 present it to the General Body for approval in the month of
 February.  When relinquishing office he shall handover to his
 successor or to the President, all the funds. Cash Registers,
 Statement of Accounts, all updated and also such other Club
 property in his custody.</p>
              <p><strong>Section-3.5 - Editor:</strong> It shall be function of the Editor to bring out
 the Club News Letter <b>“Visakha Walker”</b> regularly each month, in
 consultation with the president.</p>
            </div>

            {/* SECTION 4 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 4: Meetings</h2>

              <p><strong>Section-4.1:</strong> There shall be regular
 meeting of the General Body on First Sunday of each month, unless
 otherwise decided by the Board, and notified to the members.</p>
              <p><strong>Section-4.2:</strong> Annual General Body Meeting of the Club shall be
 held in December each year at which. Secretary’s Report on its
 activities in the preceding year and the Statement of Audited
 Accounts of the Club shall be presented. The General Body from
 its members shall elect 2 members to Audit Accounts.</p>
              <p><strong>Section-4.3:</strong> All the members shall constitute the General Body
 shall have voting rights.</p>
              <p><strong>Section-4.4:</strong> 30 Members shall constitute a Quorum at the General
 Body Meetings of the Club. For want of Quorum the meeting can
 be adjourned. The members present at an adjourned meeting
 whatever the number, shall form the Quorum.</p>
              <p><strong>Section-4.5:</strong> At least 50% of the members of the Board shall
 constitute the Quorum at any of the Board Meetings.</p>
            </div>

            {/* SECTION 5 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 5: Club Funds</h2>

              <ul className="list-disc ml-6 space-y-2">
                <li><strong>a.</strong> The Membership shall be Rs.15,000/- for Life, w.e.f. 06-07-2014
 and  thereafter,  The  membership  fees  for life member  is
 Rs. 15,000/- payable in lump sum  at the time of admission.
 Rs. 2,500/- out of the said amount shall go to the general funds
 and Rs. 12,500-/ shall go to the corpus fund to be put in fixed
 deposit and interest accrued go to general fund of the club.</li>
                <li><strong>b.</strong> Any member who wishes his/her spouse to become a life
 member of the club shall pay a fee of Rs. 7,500/- on admission
 and Rs. 2,500/- out of the said amount shall go to the general
 fund of the club and Rs. 5,000/- shall go to the corpus fund of
 the club to be kept in fixed deposit and interest thereon go to
 the general fund of the club.</li>
              </ul>
            </div>

            {/* SECTION 6 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 6: Committees</h2>
              <p> The Board may undertake publication of monthly
 News Letter under the title “Visakha Walker” giving information of
 the Club. The Editor shall be responsible for publication of the
 ‘Visakha Walker’.</p>
            </div>

            {/* SECTION 7 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 7: Finances</h2>

              <p><strong>Section-7.1:</strong> The Finances of the Club shall be from the collection
 of fee from Life Members. The Board can collect donations for the
 purpose of promotion of activities of the club.</p>
              <p><strong>Section-7.2:</strong> The Board shall have over-all control of the Finances
 of the Club.</p>
              <p><strong>Section-7.3:</strong> The Board shall invest the fee collected from
 Members in Fixed Deposits which shall constitute the Corpus Fund.
 Running expenditure shall be incurred, generally, from the interest
 derived from the Corpus Fund. Recurring expenditure shall be
 met out of the interest amount received from Fixed Deposits. If
 any expenditure is necessitated out of the Corpus Fund, the Board
 shall seek prior approval of the General Body.</p>
              <p><strong>Section-7.4:</strong> The Treasurer shall deposit all fund of the club in a
 Nationalised Bank to be selected by the board. All Bank transactions
 shall be by drawal of cheques to be signed by Two Members of
 the Board one of whom shall be the Treasurer and the other the
 President or the Secretary. In the month of January when the new
 board takes over, the Secretary shall send the concerned
 specimen signatures to the Banks concerned.</p>
              <p><strong>Section-7.5:</strong> All bills shall generally be paid by cheques, only
 against vouchers signed by the Secretary/President. The Accounts
 of the Club shall be audited by the Auditors elected by the General
 Body</p>
              <p><strong>Section-7.6:</strong> At the beginning of each Financial year, the Board
 shall prepare a Budget of estimated income & Expenditure for the
 year and shall submit the same, in the month of January to the
 General Body for approval. Generally, expenditure should not
 exceed the budgeted sums, unless otherwise sanctioned by the
 General Body.</p>
              <p><strong>Section-7.7:</strong> The Financial year of the Club shall be from 1st January
 to 31st December.</p>
              <p><strong>Section-7.8:</strong> An imprest money of Rs. 5,000/- shall be kept with
 Secretary for meeting contingencies and he shall render account
 for the same.<br />
 The funds of the Club shall be spent only for the attainments of
 the objects of the Club and no portion thereof shall be paid or
 transferred directly to any of its members through any means.</p>
            </div>

            {/* SECTION 8 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 8</h2>
              <p>Delete the entire section as it is not proper.</p>
            </div>

            {/* SECTION 9 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 9: Meeting Procedures</h2>

              <p><strong>Section-9.1:</strong>  The monthly General Body Meeting or the Annual
 General Body Meeting shall in general, adopt the following <br />
 procedure to conduct the meeting. <br />
 Meeting call to order.<br />
 Walkers Prayer.<br />
 Introduction of Visiting Walkers.<br />
 Correspondence and Announcements.<br />
 Induction of New Memebers.<br />
 Address or other future programmes.<br />
 Any other matter with the permission of the Chair.<br />
 National Anthem.<br />
 Adjournment.<br /></p>
              <p><strong>Section-9.2:</strong>  The Agenda for the Board Meetings shall be drawn
 up in advance by the Secretary in consultation with the President.</p>
            </div>

            {/* SECTION 10 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 10: Amendments</h2>

              <p> The Bye-laws may be amended at any regular
 Monthly General Body Meeting subject to the Quorum vide section
 4.4,  Place such Proposals at the general body meeting held
 previous to the meeting at which the proposals are to be considered
 and keeping copies of the proposed amendments at the meeting
 venue for perusal by the members. There shall be no proxy voting.</p>
            </div>

            {/* SECTION 11 */}
            <div className="shadow rounded-lg bg-card p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">SECTION - 11: Winding Up</h2>
              <p>In case the Club has to be windup the property and funds of the
 Club that shall be transferred or paid to some other institutions
 with similar aims and objects provided, the resolution for dissolution
 receives the assent of at least 2/3 of the General Body.</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Byelaws;
