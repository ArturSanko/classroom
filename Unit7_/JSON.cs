using System;
using System.Collections.Generic;

namespace Unit7
{
    class JSON
    {
        public class User
        {
            public string firstName { get; set; }
            public string lastName { get; set; }
            public object phone { get; set; }
            public string registrationDate { get; set; }
        }

        public class Example
        {
            public IList<User> users { get; set; }
        }
    }
}
