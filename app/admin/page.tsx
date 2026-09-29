import { supabase } from "@/lib/supabase";
import BookingActions from "@/components/admin/BookingActions";

export default async function AdminPage() {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  const totalBookings = bookings?.length ?? 0;

  const pendingBookings =
    bookings?.filter((booking) => booking.status === "pending").length ?? 0;

  const confirmedBookings =
    bookings?.filter((booking) => booking.status === "confirmed").length ?? 0;

  const cancelledBookings =
    bookings?.filter((booking) => booking.status === "cancelled").length ?? 0;

  return (
    <main className="min-h-screen bg-[#fffaf6]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
            Admin Panel
          </p>

          <h1 className="mt-2 font-serif text-4xl font-semibold text-[#3b2417]">
            ShantaKumari Mehendi Art
          </h1>

          <p className="mt-2 text-stone-600">
            Manage your bookings and customer requests.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
            Unable to load bookings. Please check your Supabase connection.
          </div>
        )}

        {/* Statistics */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-[#ead9ca] bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Total Bookings</p>
            <p className="mt-2 text-3xl font-bold text-[#3b2417]">
              {totalBookings}
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead9ca] bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-[#9a6040]">
              {pendingBookings}
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead9ca] bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Confirmed</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              {confirmedBookings}
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead9ca] bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Cancelled</p>
            <p className="mt-2 text-3xl font-bold text-red-700">
              {cancelledBookings}
            </p>
          </div>

        </div>

        {/* Bookings */}
        <section className="mt-10 overflow-hidden rounded-3xl border border-[#ead9ca] bg-white shadow-sm">

          <div className="border-b border-[#ead9ca] p-6">
            <h2 className="font-serif text-2xl font-semibold text-[#3b2417]">
              Recent Bookings
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Your latest customer booking requests.
            </p>
          </div>

          <div className="overflow-x-auto">

            {bookings && bookings.length > 0 ? (
              <table className="w-full min-w-[1050px] text-left">

                <thead className="bg-[#fffaf6]">
                  <tr>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Package
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Date
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Time
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Location
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Status
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-[#3b2417]">
                      Actions
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-[#ead9ca]"
                    >

                      {/* Customer */}
                      <td className="px-6 py-5">
                        <p className="font-semibold text-[#3b2417]">
                          {booking.customer_name}
                        </p>

                        <p className="mt-1 text-sm text-stone-500">
                          {booking.phone}
                        </p>

                        {booking.email && (
                          <p className="text-sm text-stone-500">
                            {booking.email}
                          </p>
                        )}
                      </td>

                      {/* Package */}
                      <td className="px-6 py-5 text-sm text-stone-700">
                        {booking.service}
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5 text-sm text-stone-700">
                        {booking.event_date}
                      </td>

                      {/* Time */}
                      <td className="px-6 py-5 text-sm text-stone-700">
                        {booking.event_time || "Not specified"}
                      </td>

                      {/* Location */}
                      <td className="px-6 py-5 text-sm text-stone-700">
                        {booking.location}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <BookingActions
                          bookingId={booking.id}
                          status={booking.status}
                        />
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>
            ) : (
              <div className="p-10 text-center text-stone-500">
                No bookings found.
              </div>
            )}

          </div>
        </section>

      </div>
    </main>
  );
}