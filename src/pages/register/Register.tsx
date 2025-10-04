export default function Register() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now :D</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Username</label>
                            <input type="text" className="input" placeholder="Username" />
                            <label className="label">Full Name</label>
                            <input type="text" className="input" placeholder="Full Name" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
}
