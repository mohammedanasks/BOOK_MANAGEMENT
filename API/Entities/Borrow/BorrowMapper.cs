// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Metadata.Builders;


// namespace API.Entities.Borrow
// {
//     public class BorrowMap: IEntityTypeConfiguration<BorrowBooks>
//     {
        
        
//         public void Configure(EntityTypeBuilder<BorrowBooks> builder)
//         {
//             builder
//                 .HasKey(c =>c.id);
//             builder
//                 .HasOne(x => x.Department)
//                 .WithOne(x=>x.borrowBooks)
//                 .OnDelete(DeleteBehavior.Cascade);
//             builder
//                 .HasOne(x => x.Student)
//                 .WithOne(x => x.borrowBooks)
//                 .OnDelete(DeleteBehavior.Cascade);
//             builder
//                 .HasOne(x => x.Book)
//                 .WithOne(x => x.borrowBooks)
//                 .OnDelete(DeleteBehavior.Cascade);    
//         }
        
//     }
// }