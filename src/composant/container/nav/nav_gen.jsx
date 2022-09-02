import '../../../style/public/style.css';

const Nav_Gen = () => {
    return (
        <div class="nav_fx bg-dark">
            <a href="#general" id="general">
                <button type="button" className="btn btn-success btn-ms">
                    General
                </button>
            </a>
            <a href="#forex">
                <button type="button" className="btn btn-primary btn-ms">
                    Forex
                </button>
            </a>
            <a href="#crypto">
                <button type="button" className="btn btn-primary btn-ms">
                    Crypto
                </button>
            </a>
            <a href="#merge">
                <button type="button" className="btn btn-primary btn-ms">
                    Merge
                </button>
            </a>
        </div>
    );
};
export default Nav_Gen;
