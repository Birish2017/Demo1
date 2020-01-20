using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Demo1.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Demo1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
       
        private readonly AppDBContext _context;

        public FileUploadController(AppDBContext context)
        {
          
            _context = context;
        }
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> Upload(FileUpload model)
        {
            var file = model.File;

            if (file.Length > 0)
            {
                string path = @"C:\Projects";
                string path1 = Path.Combine(path, "uploadFiles");
                using (var fs = new FileStream(Path.Combine(path, file.FileName), FileMode.Create))
                {
                    await file.CopyToAsync(fs);
                }

                model.source = path1 + $"/{file.FileName}";
                model.Extension = Path.GetExtension(file.FileName).Substring(1);
                _context.Add(model);
                _context.SaveChanges();
            }
            return BadRequest();
        }
    }
}