using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Demo1.Repository;
using Demo1.Models;
using System.Threading;

namespace Demo1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseRepository _contex;

        public CourseController(ICourseRepository contex)
        {
            _contex = contex;
        }
        // GET: api/Course
        [HttpGet]
        public ActionResult<IEnumerable<Course>>Get()
        {
            //Thread.Sleep(4000);
            List<Course> courses =  _contex.GetCourses().ToList();
            return courses;
        }

        // GET: api/Course/5
        [HttpGet("{id}", Name = "Get")]
        public Course Get(int id)
        {
            return _contex.GetCourseById(id);
        }

        // POST: api/Course
        [HttpPost]
        public ActionResult<Course> Post([FromBody] Course course)
        {
           return _contex.AddCourse(course);

            
        }

        // PUT: api/Course/5
        [HttpPut("{id}")]
        public ActionResult<Course> Put(int id, [FromBody] Course course)
        {
            return _contex.UpdateCourse(course);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult<Course> Delete(int id)
        {
          return  _contex.DeleteCourse(id);
        }
    }
}
