/*  
Copyright Microsoft Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at 

http://www.apache.org/licenses/LICENSE-2.0 

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED 
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 

See the Apache 2 License for the specific language governing permissions and
limitations under the License. */

using System;
using MileageStats.Domain.Contracts;
using MileageStats.Domain.Contracts.Data;
using MileageStats.Domain.Handlers;
using MileageStats.Domain.Models;
using Moq;
using Xunit;

namespace MileageStats.Domain.Tests
{
    public class WhenCreatingUser
    {
        private readonly Mock<IUserRepository> _userRepo;

        public WhenCreatingUser()
        {
            _userRepo = new Mock<IUserRepository>();
        }

        [Fact]
        public void InvokesUserRepository()
        {
            var user = new User {};

            var handler = new CreateUser(_userRepo.Object);
            handler.Execute("id");

            _userRepo
                .Verify(r => r.Create(It.Is<User>(u => u.AuthorizationId == "id")), Times.Once());
        }
    }
}