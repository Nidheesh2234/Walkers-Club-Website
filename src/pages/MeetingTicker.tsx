import { Calendar, Clock, MapPin } from "lucide-react";

const MeetingTicker = () => {
  return (
    <div className="absolute top-20 right-4 w-80 p-4 rounded-2xl shadow-xl backdrop-blur-lg bg-white/40 border border-white/30">
      {/* Title */}
      <h3 className="font-semibold text-primary text-lg mb-3">
        Upcoming Meetings
      </h3>

      {/* Meeting 1 */}
      <div className="mb-4 pb-3 border-b border-white/40">
        <p className="font-bold text-gray-900 text-base mb-1">
          Sunday Walking Meet
        </p>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <Calendar className="w-4 h-4" /> Next Sunday
        </div>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <Clock className="w-4 h-4" /> 6:00 AM
        </div>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <MapPin className="w-4 h-4" /> VUDA Park Entrance
        </div>
      </div>

      {/* Meeting 2 */}
      <div>
        <p className="font-bold text-gray-900 text-base mb-1">
          Monthly General Meeting
        </p>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <Calendar className="w-4 h-4" /> 1st Sunday
        </div>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <Clock className="w-4 h-4" /> 7:45 AM
        </div>
        <div className="flex items-center gap-2 text-gray-900 text-sm">
          <MapPin className="w-4 h-4" /> Club Office, MVP Colony
        </div>
      </div>
    </div>
  );
};

export default MeetingTicker;
