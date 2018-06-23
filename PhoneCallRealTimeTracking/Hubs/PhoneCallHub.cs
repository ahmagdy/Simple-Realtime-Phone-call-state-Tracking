using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneCallRealTimeTracking.Hubs
{
    public class PhoneCallHub : Hub
    {

        public async Task StartCall(string connectionId, string something)
        {
            // Do Something
            await Clients.Client(connectionId).SendAsync("ChangeCallState","Start");
        }

        public async Task ChangeCallState( string text)
        {
            var x = Context.ConnectionId;
            var y = Context.UserIdentifier;

            await Clients.Client(x).SendAsync(text);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }


    }
}
