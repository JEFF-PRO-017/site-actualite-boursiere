import '../../../style/public/style.css';

const Nav_merge = () => {
    return (
        <div class="nav_fx bg-dark">
            <a href="#general">
                <button type="button" className="btn btn-primary btn-ms">
                    General
                </button>
            </a>
            <a href="#forex" >
                <button type="button" className="btn btn-primary btn-ms">
                    Forex
                </button>
            </a>
            <a href="#crypto">
                <button type="button" className="btn btn-primary btn-ms">
                    Crypto
                </button>
            </a>
            <a href="#merge" id='merge'>
                <button type="button" className="btn btn-success btn-ms">
                    Merge
                </button>
            </a>
        </div>
    );
};
export default Nav_merge;
