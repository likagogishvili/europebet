import "./main.css";
import NextPage from "./nextPage";
import banner from "../assets/banner-m.jpg";
import lock from "../assets/lock-sm.png";
import qmark from "../assets/example-icon.png";
import plus from "../assets/plus.png";
import { useState } from "react";
function Main() {
  const [check, setcheck] = useState(false);
  const [qm1, setqm1] = useState(false);
  const [qm2, setqm2] = useState(false);

  return (
    <main>
      <section className="section1">
        <img src={banner} alt="" />
        <div className="boxes">
          <div className="box">
            <p>1-2 კვირა</p>
            <p>2 000 000₾</p>
          </div>
          <div className="box">
            <p>5-8 კვირა</p>
            <p>2 000 000₾</p>
          </div>
          <div className="box">
            <p>
              {" "}
              <img src={lock} alt="" /> 5-8 კვირა
            </p>
            <p>2 000 000₾</p>
          </div>
          <div className="box">
            <p>
              {" "}
              <img src={lock} alt="" /> 5-8 კვირა
            </p>
            <p>2 000 000₾</p>
          </div>
        </div>
      </section>
      <h2>
        12 კვირის განმავლობაში, მიიღე ფულადი პრიზები ყოველკვირეული საპრიზო
        ფონდიდან
      </h2>
      <div className="dates">
        <button onClick={() => setcheck(false)}>2.07-29.07</button>
        <button onClick={() => setcheck(true)}>2.07-29.07</button>
        <button onClick={() => setcheck(false)}>2.07-29.07</button>
        <button onClick={() => setcheck(false)}>2.07-29.07</button>
      </div>
      <section className="section2">
        {check && <NextPage />}
        <div className="content">
          <div>
            <p>ᲛᲝᲮᲕᲓᲘ ᲧᲝᲕᲔᲚᲙᲕᲘᲠᲔᲣᲚ ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ</p>
            <p>
              ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის
              შენი ქულა ლიდერბორდში
            </p>
          </div>
          <div>
            <p>
              ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის
              შენი ქულა ლიდერბორდში
            </p>
            <p>ყოველდღიური, 36 000₾-ის ფულადი პრიზები</p>
          </div>
        </div>
        <div className="tables_cont">
          <div className="tables_cont_first">
            <div className="qmark">
              <div className="top">
                <p>ყოველდღიური 248 000₾</p>
                Top 1500
              </div>
              {check && (
                <img
                  src={qmark}
                  alt=""
                  width="45px"
                  height="45px"
                  onMouseEnter={() => setqm1(true)}
                  onMouseLeave={() => setqm1(false)}
                />
              )}
            </div>

            <div className="table">
              <div className="heading">
                <div>ადგილი</div>
                <div>პრიზი</div>
              </div>
              <div className="column">
                <div>1</div>
                <div>10 000₾</div>
              </div>
              <div className="column">
                <div>2</div>
                <div>5 000₾</div>
              </div>
              <div className="column">
                <div>3</div>
                <div>2 000₾</div>
              </div>
              <div className="column">
                <div>4-10</div>
                <div>1 500₾</div>
              </div>
              <div className="column">
                <div>11-20</div>
                <div>500₾</div>
              </div>
              <div className="column">
                <div>21-50</div>
                <div>200₾</div>
              </div>
            </div>
          </div>
          <div className="tables_cont_second">
            <div className="qmark">
              <div className="top1">
                <p>1500 პრიზი</p>
                1500 პრიზი
              </div>
              {check && (
                <img
                  src={qmark}
                  alt=""
                  width="45px"
                  height="45px"
                  onMouseEnter={() => setqm2(true)}
                  onMouseLeave={() => setqm2(false)}
                />
              )}
            </div>
            <div className="table">
              <div className="heading">
                <div>რაოდენობა</div>
                <div>პრიზები</div>
              </div>
              <div className="column">
                <div>1</div>
                <div>4 000₾</div>
              </div>
              <div className="column">
                <div>2</div>
                <div>2 000₾</div>
              </div>
              <div className="column">
                <div>6</div>
                <div>400₾</div>
              </div>
              <div className="column">
                <div>12</div>
                <div>200₾</div>
              </div>
              <div className="column">
                <div>110</div>
                <div>80₾</div>
              </div>
              <div className="column">
                <div>370</div>
                <div>40₾</div>
              </div>
            </div>
          </div>
          {qm1 && (
            <div className="qm1">
              <p>
                მოთამაშემ 10₾-იანი სპინით დააფიქსირა ყველაზე მაღალი მოგება და
                ლიდერბორდში დაიკავა პირველი ადგილი, ის მიიღებს 10₾X10 000=100
                000₾-ს
              </p>
            </div>
          )}
          {qm2 && (
            <div className="qm2">
              <p>
                მოთამაშემ 10₾-იანი სპინით დააფიქსირა ყველაზე მაღალი მოგება და
                ლიდერბორდში დაიკავა პირველი ადგილი, ის მიიღებს 10₾X10 000=100
                000₾-ს
              </p>
            </div>
          )}

          <div className="plusSign">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="texts">
          <p>*პრიზები დაირიცხება ავტომატურად მოგებისთანავე.</p>
          <p>
            *ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება
            ავტომატურად, მონაწილე თამაშების ფანჯარაში
          </p>
          <p>
            *ფრისპინების მოგების შემთხვევაში, 10 ცალი ფრისპინის ნომინალი
            განისაზღვრებამომგებიან სპინზე დადებული ფსონის შესაბამისად. თუ
            მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 4₾-ს, მოთამაშე ჯამურად
            მიიღებს 10 ცალ 4 ლარიან ფრისპინს
          </p>
        </div>
      </section>
    </main>
  );
}
export default Main;
