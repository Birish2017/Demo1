using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo1.Models;

namespace Demo1.Repository
{
    public class CourseRepository : ICourseRepository
    {
        private readonly AppDBContext _contex;

        public CourseRepository(AppDBContext contex)
        {
            _contex = contex;
        }
        public Course AddCourse(Course course)
        {
            _contex.courses.Add(course);
            _contex.SaveChanges();
            int courseId = course.id;
           return _contex.courses.SingleOrDefault(x => x.id == courseId);
        }

        public Course DeleteCourse(int Id)
        {
           Course course= _contex.courses.SingleOrDefault(c => c.id == Id);
            _contex.courses.Remove(course);
            _contex.SaveChanges();

            return course;
        }

        public Course GetCourseById(int Id)
        {
           return _contex.courses.SingleOrDefault(c => c.id == Id);
        }

        public IEnumerable<Course> GetCourses()
        {
            return _contex.courses.ToList();
        }

        public Course UpdateCourse(Course course)
        {
            Course existingcourse = _contex.courses.FirstOrDefault(x => x.id == course.id);
            if(course != existingcourse)
            {
                existingcourse.title = course.title;
                existingcourse.authorId= course.authorId;
                existingcourse.category = course.category;

                _contex.SaveChanges();
            }


            return _contex.courses.FirstOrDefault(x => x.id == course.id);
        }
    }
}
