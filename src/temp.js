<nav className="navbar navbar-default" role="navigation">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">LiYueXis  Blog</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}
           to ='/' onlyActiveOnIndex={true} >首页</Link></li>
        <li><Link activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}
           to='works'>我的工作</Link></li>
        <li className="dropdown">
          <Link activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}
             to='blogs'>我的博客</Link>
        </li>
        <li><Link activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}
           to='about' href="#">关于</Link></li>
      </ul>
      <form className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</nav>
