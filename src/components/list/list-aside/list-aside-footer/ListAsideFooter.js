const ListAsideFooter = () => { 

    const applicationVersion = '1.0.0';
    
    return (
        <div className="colorlib-footer">				
	        <p className="pfooter">
			    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>.
			    Application Version: <span> {applicationVersion} </span>
			</p>
        </div>
    );

}

export default ListAsideFooter;