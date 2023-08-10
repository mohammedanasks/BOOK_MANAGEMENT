// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Metadata.Builders;

// namespace API.Entities.Students
// {
//     public class StudentMapper
//     {
//          public void Configure(EntityTypeBuilder<Student> builder)
//         {
//             builder
//                 .HasKey(c => new{c.BorrowBooksId, c.FineId});
//             builder
//                 .HasOne(x => x.BorrowBooks)
//                 .WithMany(x => x.Students)
//                 .HasForeignKey(x => x.BorrowBooksId)
//                 .OnDelete(DeleteBehavior.Cascade);
//             builder
//                 .HasOne(x => x.fine)
//                 .WithMany(x => x.Students)
//                 .HasForeignKey(x => x.FineId)
//                 .OnDelete(DeleteBehavior.Cascade);
//         }
//     }
// }