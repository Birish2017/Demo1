using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo1.Models;

namespace Demo1.Repository
{
    public interface ICourseRepository
    {
        IEnumerable<Course> GetCourses();
        Course GetCourseById(int Id);
        Course AddCourse(Course course);
        Course UpdateCourse(Course course);
        Course DeleteCourse(int Id);
    }
}
