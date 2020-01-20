using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Demo1.Models
{
    public class FileUpload
    {
       public int FileUploadId { get; set; }
        [NotMapped]
        public IFormFile File { get; set; }
        [NotMapped]
        public string source { get; set; }
        [NotMapped]
        public long Size { get; set; }
        [NotMapped]
        public int Width { get; set; }
        [NotMapped]
        public int Height { get; set; }
        [NotMapped]
        public string Extension { get; set; }
    }
}
