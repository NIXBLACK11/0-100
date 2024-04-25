export default function Signin({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        <div>
            <div className="border-b text-center">
                20% off for the next few days
            </div>
            {children}
        </div>
    )
}