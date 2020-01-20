using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demo1.Models
{
    public class Course
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string slug { get; set; }
        public int authorId { get; set; }
        public Author author { get; set; }
        public string category { get; set; }

    }
}
