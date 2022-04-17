import React from "react";
import Joblist from "./Joblist";
import "./job.css";

function Job() {
  return (
    <div className="job">
      <div className="heading">Welcome to Our Career Page!</div>
      <div className="joblist">
        <Joblist
          title="Software Developer"
          srcImg={
            "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png"
          }
        />
        <Joblist
          title="Web Developer"
          srcImg={
            "https://www.pngkit.com/png/detail/22-220591_custom-software-development-custom-software-application-development.png"
          }
        />
        <Joblist
          title="Android Developer"
          srcImg={
            "https://www.pngitem.com/pimgs/m/529-5293686_android-app-development-comapny-gurgaon-android-phone-vector.png"
          }
        />
        <Joblist
          title="Data Scientist"
          srcImg={
            "https://analyticsindiamag.com/wp-content/uploads/2019/08/undraw_all_the_data_h4ki.png"
          }
        />
        <Joblist
          title="Bussiness Manager"
          srcImg={
            "https://blog.tryshiftcdn.com/uploads/2019/10/1652_1160x600_acf_cropped-1.png"
          }
        />
        <Joblist
          title="Human Resources "
          srcImg={
            "https://www.kindpng.com/picc/m/371-3719564_transparent-human-resource-png-png-download-hr-png.png"
          }
        />
      </div>
    </div>
  );
}

export default Job;
