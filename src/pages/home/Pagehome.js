import moduleStyle from './Home.module.css';
import { ReactComponent as Saly} from '../../ico/Saly13.svg'
import { Link } from "react-router-dom";


function Pagehome(){

// 스타일 함수 정의
const linkStyle_pink = {
    background: 'var(--Purple-Pink-Gradient-2, linear-gradient(90deg, #8B5CF6 0%, #EC4899 43.9%))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const linkStyle_oj = {
    background: 'var(--Yellow-Red-Gradient, linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

return(
<div className={moduleStyle.viewsplit}>

    <div>   
        <span className={moduleStyle.split1}>
        <a>안녕하세요!</a><br/>
        <a>Front-End</a>
        <a style={linkStyle_pink}> Developer</a><br />
        <a style={linkStyle_oj}>문종준</a> <a>입니다.</a> 
        </span>
    </div>

    <div>
    끊임없는 학습을 통해 사용자 인터페이스와 경험을 기술적으로 정확하게 구현할 수 있도록 노력합니다.<br/>
    새로운 기술을 배우고 익히는 것을 좋아하는 저에게 있어<br/>
    역량을 발휘하며 성장할 수 있는 최고의 분야라고 생각합니다
    </div>

    <div>
        <Link to='/portfolio'><button type='button'>More Portfolio →</button></Link> 
    </div>
    <div className={moduleStyle.slaycssContainer}>
        <div><Saly className={moduleStyle.slaycss}/></div>
    </div>
</div>
);
}
export default Pagehome;