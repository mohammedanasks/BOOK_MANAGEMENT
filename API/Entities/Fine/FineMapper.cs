// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Metadata.Builders;
// using API.Entities.fine;

// namespace API.Entities.Fines
// {
//     public class FineMapper : IEntityTypeConfiguration<Fine>
//     {
        
//         public void Configure(EntityTypeBuilder<Fine> builder)
//         {
//             builder
//                 .HasKey(c => new{c.DepartmentId, c.StudentId});
//             builder
//                 .HasOne(x => x.Department)
//                 .WithOne(x=>x.Fine)
//                 .OnDelete(DeleteBehavior.Cascade);
//             builder
//                 .HasOne(x => x.Student)
//                 .WithOne(x => x.Fine)
//                 .OnDelete(DeleteBehavior.Cascade);
//         }
//     }
// }