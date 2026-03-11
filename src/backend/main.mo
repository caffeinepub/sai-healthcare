import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type Inquiry = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phoneNumber : Text, email : Text, message : Text) : async () {
    if (name.size() == 0 or phoneNumber.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields must be filled out");
    };

    let inquiry : Inquiry = {
      name;
      phoneNumber;
      email;
      message;
    };

    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
