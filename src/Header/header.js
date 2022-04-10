import "./header.css"
import x from '../assets/x.png'
import prizeEn from '../assets/prize-en.png'
function header(){
    return(
    <header>
        <div className="cont1">
            <p>10 იანვრიდან - 12 მარტამდე</p>
            <div className="x">
                <img src={x} width="50%" height="50%" alt="" />
            </div>
        </div>
        <div className="cont2">
          <div className="d1">
              <button>სლოტები</button>
              <p className="p1">PRAGMATIC-ის რჩეულ სლოტებში დიდი ფულადი პრიზები და ქეშდროფები გელოდება</p>
              <p className="p2">52 კვირის განმავლობაში, მიიღე ფულადი პრიზები ყოველკვირეული საპრიზო ფონდიდან</p>
          </div>
          <div className="img1">
              <img src={prizeEn} alt=""/>
          </div>
        </div>
    </header>
    )
}

export default header